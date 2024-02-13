import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseInterceptors } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CustomInterceptors } from 'src/custom.interceptors';

@ApiTags('address')
@Controller('user/:userId/address/')
@ApiParam({ name: 'userId', description: 'User Id' })
@UseInterceptors(CustomInterceptors)
export class AddressController {
  constructor(private readonly addressService: AddressService) { }

  @Post()
  create(
    @Param('userId') userId: number,
    @Body() createAddressDto: CreateAddressDto
  ) {
    createAddressDto.user_id = Number(userId);
    return this.addressService.create(createAddressDto);
  }

  @Get()
  findByUserId(@Param('userId') userId: number) {
    return this.addressService.findByUserId(Number(userId));
  }

  @Get(':addressId')
  findOneUserAddress(
    @Param('userId') userId: number,
    @Param('addressId') addressId: number
  ) {
    return this.addressService.findOneUserAddress(Number(userId), Number(addressId));
  }

  @Put(':addressId')
  update(
    @Param('userId') userId: number,
    @Param('addressId') addressId: number,
    @Body() updateAddressDto: UpdateAddressDto
  ) {
    return this.addressService.update(
      Number(userId),
      Number(addressId),
      updateAddressDto
    );
  }

  @Delete(':addressId')
  remove(
    @Param('userId') userId: number,
    @Param('addressId') addressId: number
  ) {
    return this.addressService.delete(Number(userId), Number(addressId));
  }
}
