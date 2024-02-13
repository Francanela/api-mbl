import { Module } from '@nestjs/common';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';
import { PrismaService } from 'src/database/PrismaService';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';
import { ApplicationsService } from 'src/applications/applications.service';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [PhonesController],
  providers: [PhonesService, LogService, PrismaService, LogConsts],
})
export class PhonesModule {}
