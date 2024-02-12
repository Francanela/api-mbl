import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  create(createAddressDto: CreateAddressDto) {
    return this.prisma.address.create({data: createAddressDto});
  }

  findByUserId(id: number) {
    return this.prisma.address.findMany({ where:{ user_id: id, deleted_at: null} }  );
  }

  update(id: number, updateAddressDto: CreateAddressDto) {
    return this.prisma.address.update({data: updateAddressDto, where: {id: id}});
  }

  remove(id: number) {
    return this.prisma.address.update({data: {deleted_at: new Date()}, where: {id: id}});
  }
}
