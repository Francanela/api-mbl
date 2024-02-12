import { Module } from '@nestjs/common';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [PhonesController],
  providers: [PhonesService, PrismaService],
})
export class PhonesModule {}
