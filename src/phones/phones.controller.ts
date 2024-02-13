import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { JwtAuthGuard } from 'src/auth/auth.service';

@ApiTags('phones')
@Controller('user/:userId/phones/')
@ApiParam({ name: 'userId', description: 'User ID' })
@UseGuards(JwtAuthGuard)
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Get()
  async findUserPhones(
      @Param('userId') userId: string, 
    ) {
      return this.phonesService.findUserPhones(parseInt(userId))
  }

  @Get(':phoneId')
  async findOneUserPhone(
      @Param('userId') userId: string, 
      @Param('phoneId') phoneId: string, 
    ) {
      return this.phonesService.findOne(parseInt(userId), parseInt(phoneId))
  }

  @Post()
  async createPhone(
    @Param('userId') userId: string,
    @Body() createPhoneDto: CreatePhoneDto
  ) {
    return this.phonesService.create(parseInt(userId), createPhoneDto)
  }

  @Put(':phoneId')
  async updateUserPhone(
    @Param('userId') userId: string,
    @Param('phoneId') phoneId: string,
    @Body() updatePhoneDto: UpdatePhoneDto
  ) {
    return this.phonesService.update(parseInt(userId), parseInt(phoneId), updatePhoneDto)
  }

  @Delete(':phoneId')
  async deleteUserPhone(
    @Param('userId') userId: string,
    @Param('phoneId') phoneId: string
  ) {
    return this.phonesService.delete(parseInt(userId), parseInt(phoneId))
  }
}
