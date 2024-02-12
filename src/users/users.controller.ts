import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { PhonesService } from 'src/phones/phones.service';
import { CreatePhoneDto } from 'src/phones/dto/create-phone.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly phoneService: PhonesService
  ) { }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() createUserDto: CreateUserDto) {
    return this.usersService.update(+id, createUserDto);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get(':userId/phones/:phoneId')
  async findUserPhones(
      @Param('userId') userId: string, 
    ) {
      return this.phoneService.findUserPhones(userId)
  }

  @Get(':userId/phones/:phoneId')
  async findOneUserPhone(
      @Param('userId') userId: string, 
      @Param('phoneId') phoneId: string, 
    ) {
      return this.phoneService.findOne(userId, phoneId)
  }

  @Post(':userId/phones')
  async createPhone(
    @Param('userId') userId: string,
    @Body() createPhoneDto: CreatePhoneDto
  ) {
    console.log(createPhoneDto)
    return this.phoneService.create(userId, createPhoneDto)
  }

  @Put(':userId/phones/:phoneId')
  async updateUserPhone(
    @Param('userId') userId: string,
    @Param('phoneId') phoneId: string,
    @Body() createPhoneDto: CreatePhoneDto
  ) {
    return this.phoneService.update(userId, phoneId, createPhoneDto)
  }

  @Delete(':userId/phones/:phoneId')
  async deleteUserPhone(
    @Param('userId') userId: string,
    @Param('phoneId') phoneId: string
  ) {
    return this.phoneService.delete(userId, phoneId)
  }
}