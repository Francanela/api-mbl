import { Module } from '@nestjs/common';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';
import { PrismaService } from 'src/database/PrismaService';
import { LogService } from 'src/log/log.service';

@Module({
  controllers: [PhonesController],
  providers: [PhonesService, LogService, PrismaService],
})
export class PhonesModule {}
