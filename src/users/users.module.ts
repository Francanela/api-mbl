import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/database/PrismaService';
import { PhonesService } from 'src/phones/phones.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PhonesService, PrismaService]
})
export class UsersModule {}
