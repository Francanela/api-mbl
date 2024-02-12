import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto) {
    return this.prisma.address.create({data: createAddressDto});
  }

  async findByUserId(id: number) {
    return this.prisma.address.findMany({where: {user_id: id, deleted_at: null}});
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    return this.prisma.address.update({where: {id}, data: updateAddressDto});
  }

  async remove(id: number) {
    return this.prisma.address.update({where: {id}, data: {deleted_at: new Date()}});
  }
}
