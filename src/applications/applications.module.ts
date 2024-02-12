import { ApplicationsService } from './applications.service';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService'; // Importe o PrismaService
import { ApplicationsController } from './applications.controller';
@Module({
  controllers: [ApplicationsController], // Adicione o ConfigModule aos imports do módulo
  providers: [ApplicationsService, PrismaService] // Forneça os serviços necessários
})
export class ApplicationsModule {}
