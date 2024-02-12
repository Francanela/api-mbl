import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { LogService } from 'src/log/log.service';
import { CreateLogDto } from 'src/log/dto/create-log.dto';
import { LogConsts } from 'src/commons/const-object.commons';

@Injectable()
export class PhonesService {

  constructor(
    private prisma: PrismaService,
    private readonly logService: LogService,
    private readonly logConst: LogConsts
  ) { }

  async findUserPhones(userId: number) {
    return this.prisma.phone.findMany({
      where: {
        user_id: userId,
        deleted_at: null
      }
    })
  }

  async findOne(userId: number, id: number) {
    return this.prisma.phone.findUnique({
      where: {
        id: id,
        user_id: userId,
        deleted_at: null
      },
    });
  }

  async create(userId: number, createPhoneDto: CreatePhoneDto) {
    const createdPhone = this.prisma.phone.create({
      data: {
        phone_number: createPhoneDto.phoneNumber,
        main_phone: createPhoneDto.mainPhone,
        user_id: userId
      }
    })

    this.logService.log(
      new CreateLogDto(
        1,
        this.logConst.createOperation,
        this.logConst.phoneEntity,
        (await createdPhone).id.toString()
      )
    )

    return createPhoneDto
  }

  async update(userId: number, phoneId: number, updatePhoneDto: UpdatePhoneDto) {
    const originalPhone = (await this.findOne(userId, phoneId))    

    const now = new Date

     this.logService.log(
      new CreateLogDto(
        1,
        this.logConst.updateOperation,
        this.logConst.phoneEntity,
        JSON.stringify(originalPhone)
      )
    )
    
    return this.prisma.phone.update({
      where: {
        id: phoneId,
        user_id: userId
      },
      data: {
        phone_number: updatePhoneDto.phoneNumber,
        main_phone: updatePhoneDto.mainPhone,
        updated_at: now.toISOString()
      }
    })
  }

  async delete(userId: number, phoneId: number) {
    const now = new Date

    this.logService.log(
      new CreateLogDto(
        1,
        this.logConst.deleteOperation,
        this.logConst.phoneEntity,
        phoneId.toString()
      )
    )

    return this.prisma.phone.update({
      where: {
        id: phoneId,
        user_id: userId
      },
      data: {
        deleted_at: now.toISOString()
      }
    })
  }

}
