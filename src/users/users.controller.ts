import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
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
      return this.phoneService.update
  }
}