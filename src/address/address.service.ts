import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  create(createAddressDto: CreateAddressDto) {
    return 'This action adds a new address';
  }

  findByUserId(id: string) {
    return this.prisma.address.findMany({ where:{ user_id: id, deleted_at: null} }  );
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  remove(id: string) {
    return this.prisma.address.update({data: {deleted_at: new Date()}, where: {id: id}});
  }
}
