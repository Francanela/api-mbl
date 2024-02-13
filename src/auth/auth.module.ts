import { Module } from '@nestjs/common';
import { ApplicationsService } from '../applications/applications.service';
import { PrismaService } from 'src/database/PrismaService';
import { ApplicationsModule } from 'src/applications/applications.module';
import { JwtAuthGuard } from './auth.service';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';

@Module({
  controllers: [],
  providers: [PrismaService, ApplicationsService, LogService, JwtAuthGuard, LogConsts],
  imports: []
})
export class AuthModule {}
