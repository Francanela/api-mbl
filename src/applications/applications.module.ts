import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService'; // Importe o PrismaService
import { ConfigModule } from '@nestjs/config'; // Importe o ConfigModule
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule], // Adicione o ConfigModule aos imports do módulo
  providers: [ApplicationsService, PrismaService, ConfigService], // Forneça os serviços necessários
})
export class ApplicationsModule {}
