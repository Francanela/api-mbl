import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { PrismaService } from 'src/database/PrismaService';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService, LogService, LogConsts, PrismaService]
})
export class ApplicationsModule {}
