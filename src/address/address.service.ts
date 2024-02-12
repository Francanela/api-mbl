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

  findByUserId(id: string) {
    return this.prisma.address.findMany({ where:{ user_id: id, deleted_at: null} }  );
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return this.prisma.address.update({data: updateAddressDto, where: {id: id}});
  }

  remove(id: string) {
    return this.prisma.address.update({data: {deleted_at: new Date()}, where: {id: id}});
  }
}
