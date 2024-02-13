import { Module } from '@nestjs/common';
import { ApplicationsService } from '../applications/applications.service';
import { PrismaService } from 'src/database/PrismaService';
import { ApplicationsModule } from 'src/applications/applications.module';
import { JwtAuthGuard } from './auth.service';

@Module({
  controllers: [],
  providers: [PrismaService, ApplicationsService, JwtAuthGuard],
  imports: []
})
export class AuthModule {}
