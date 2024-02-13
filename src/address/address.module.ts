import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { PrismaService } from 'src/database/PrismaService';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';
import { UsersService } from 'src/users/users.service';
import { ApplicationsService } from 'src/applications/applications.service';

@Module({
  controllers: [AddressController],
  providers: [AddressService, LogService, LogConsts, PrismaService, UsersService, ApplicationsService],
})
export class AddressModule {}
