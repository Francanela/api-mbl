import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { PrismaService } from 'src/database/PrismaService';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [AddressController],
  providers: [AddressService,  UsersService, LogService, LogConsts, PrismaService],
})
export class AddressModule {}
