import { Module } from '@nestjs/common';
import { PaymentCardsService } from './payment-cards.service';
import { PaymentCardsController } from './payment-cards.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [PaymentCardsController],
  providers: [PaymentCardsService, PrismaService],
})
export class PaymentCardsModule {}
