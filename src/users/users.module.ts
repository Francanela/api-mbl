import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/database/PrismaService';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';
import { ApplicationsService } from 'src/applications/applications.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, LogService, LogConsts, PrismaService, ApplicationsService]
})
export class UsersModule {}
