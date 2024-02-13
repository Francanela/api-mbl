import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateAddressDto } from './dto/update-address.dto';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';
import { CreateLogDto } from 'src/log/dto/create-log.dto';

@Injectable()
export class AddressService {
  constructor(
    private prisma: PrismaService,
    private readonly logService: LogService,
    private readonly logConst: LogConsts
  ) { }

  private async isThereAnotherMainAddress(userId: number) {
    const mainAddress = await this.prisma.address.findFirst({
      where: {
        user_id: userId,
        main_address: true,
        deleted_at: null
      }
    })

    if(mainAddress) {
      throw new ConflictException("Already exist an main address")
    }
  }

  async create(createAddressDto: CreateAddressDto) {
    if (createAddressDto.main_address === true) {
      (await this.isThereAnotherMainAddress(createAddressDto.user_id))
    }

    const createdAddress = this.prisma.address.create({ data: createAddressDto })

    this.logService.log(
      new CreateLogDto(
        1,
        this.logConst.createOperation,
        this.logConst.addressEntity,
        (await createdAddress).id.toString()
      )
    )

    return createdAddress;
  }

  async findOneUserAddress(userId: number, addressId: number) {
    return this.prisma.address.findUnique({
      where: {
        user_id: userId,
        id: addressId
      }
    })
  }

  async findByUserId(id: number) {
    return this.prisma.address.findMany({ where: { user_id: id, deleted_at: null } });
  }

  async update(
    userId: number,
    addressId: number,
    updateAddressDto: UpdateAddressDto
  ) {
    if(updateAddressDto.main_address) {
      (await this.isThereAnotherMainAddress(userId))
    }

    const originalAddress = (await this.findOneUserAddress(userId, addressId))

    this.logService.log(
      new CreateLogDto(
        1,
        this.logConst.updateOperation,
        this.logConst.addressEntity,
        JSON.stringify(originalAddress)
      )
    )

    return this.prisma.address.update({
      where: {
        id: addressId,
        user_id: userId
      }, data: updateAddressDto
    });
  }

  async delete(userId: number, addressId: number) {
    console.log(userId);

    this.logService.log(
      new CreateLogDto(
        1,
        this.logConst.deleteOperation,
        this.logConst.addressEntity,
        addressId.toString()
      )
    )

    return this.prisma.address.update({
      where: {
        user_id: userId,
        id: addressId
      }, data: { deleted_at: new Date().toISOString() }
    });
  }
}
