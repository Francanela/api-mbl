import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/database/PrismaService';
import { Address } from '@prisma/client';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAddressDto): Promise<Address> {        
      return this.prisma.address.create({ data });
  }

  // findOne(id: string) {
  //   return `This action returns a #${id} address`;
  // }

  // update(id: number, updateAddressDto: UpdateAddressDto) {
  //   return `This action updates a #${id} address`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} address`;
  // }
}
