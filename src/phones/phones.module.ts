import { Module } from '@nestjs/common';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';
import { PrismaService } from 'src/database/PrismaService';
import { ApplicationsService } from 'src/applications/applications.service';

@Module({
  controllers: [PhonesController],
  providers: [PhonesService, PrismaService, ApplicationsService],
})
export class PhonesModule {}
