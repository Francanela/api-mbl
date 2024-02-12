import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { PrismaService } from 'src/database/PrismaService';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';

@Module({
  controllers: [AddressController],
  providers: [AddressService, LogService, LogConsts, PrismaService],
})
export class AddressModule {}
