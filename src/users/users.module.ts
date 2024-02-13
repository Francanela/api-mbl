import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/database/PrismaService';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';

@Module({
  controllers: [UsersController],
  providers: [UsersService, LogService, LogConsts, PrismaService]
})
export class UsersModule {}
