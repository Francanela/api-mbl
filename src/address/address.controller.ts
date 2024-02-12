import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post(':userId')
  create(@Param('userId') userId: number, @Body() createAddressDto: CreateAddressDto) {
    createAddressDto.user_id = Number(userId);
    return this.addressService.create(createAddressDto);
  }

  @Get('find/:id')
  findByUserId(@Param('id') id: number) {
     return this.addressService.findByUserId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.addressService.remove(+id);
  }
}
