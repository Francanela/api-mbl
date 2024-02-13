import { Module } from '@nestjs/common';
import { PaymentCardsService } from './payment-cards.service';
import { PaymentCardsController } from './payment-cards.controller';
import { PrismaService } from 'src/database/PrismaService';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [PaymentCardsController],
  providers: [PaymentCardsService, UsersService, PrismaService, LogService, LogConsts],
})
export class PaymentCardsModule {}
