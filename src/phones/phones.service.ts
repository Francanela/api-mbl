import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { LogService } from 'src/log/log.service';
import { CreateLogDto } from 'src/log/dto/create-log.dto';
import { LogConsts } from 'src/commons/const-object.commons';
import { throwError } from 'rxjs';

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

  private async isThereAnotherPhoneMain(userId: number) {
    const mainPhone = await this.prisma.phone.findFirst({
      where: {
        user_id: userId,
        main_phone: Boolean(true),
        deleted_at: null
      },
    })

    if (mainPhone) {
      throw new ConflictException("Already exist main phone")
    }

  }

  private async changeMainPhone(userId: number) {
    const mainPhone = await this.prisma.phone.findFirst({
      where: {
        user_id: userId,
        main_phone: Boolean(true),
        deleted_at: null
      },
    })

    if (mainPhone === null) { return }

    await this.prisma.phone.update({
      where: {
        user_id: userId,
        id: mainPhone.id,
        deleted_at: null
      },
      data: { ...mainPhone, main_phone: false }
    })
  }

  async create(userId: number, createPhoneDto: CreatePhoneDto) {
    if (createPhoneDto.mainPhone) {
      (await this.isThereAnotherPhoneMain(userId))
    }

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

    if (originalPhone === null) {
      throw new NotFoundException("You do not own this number!")
    }

    if (updatePhoneDto.mainPhone) {
      (await this.changeMainPhone(userId))
    }

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
        user_id: userId,
        deleted_at: null
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
