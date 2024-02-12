import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreatePhoneDto } from './dto/create-phone.dto';

@Injectable()
export class PhonesService {

  constructor(private prisma: PrismaService) {}

  async findUserPhones(userId: number){
    return this.prisma.phone.findMany({
      where:{
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

  async create(userId: number, createPhoneDto: CreatePhoneDto){
    return this.prisma.phone.create({data:{
      phone_number: createPhoneDto.phoneNumber,
      main_phone: createPhoneDto.mainPhone,
      user_id: userId
    }})
  }

  async update(userId: number, phoneId: number, createPhoneDto: CreatePhoneDto) {
    const now = new Date
    
    return this.prisma.phone.update({
      where: {
        id: phoneId,
        user_id: userId
      },
      data:{
        phone_number: createPhoneDto.phoneNumber,
        main_phone: createPhoneDto.mainPhone,
        updated_at: now.toISOString()
      }})
  }

  async delete(userId: number, phoneId: number) {
    const now = new Date
    
    return this.prisma.phone.update({
      where:{
        id: phoneId,
        user_id: userId
      },
      data:{
        deleted_at:now.toISOString()
      }
    })
  }

}
