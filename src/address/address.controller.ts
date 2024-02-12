import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @Get(':id')
  findByUserId(@Param('id') id: number) {
    return this.addressService.findByUserId(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAddressDto: CreateAddressDto) {
    return this.addressService.update(id, updateAddressDto);
  }
  
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.addressService.remove(id);
  }
}
