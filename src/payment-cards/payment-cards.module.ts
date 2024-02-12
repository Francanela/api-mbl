import { Module } from '@nestjs/common';
import { PaymentCardsService } from './payment-cards.service';
import { PaymentCardsController } from './payment-cards.controller';

@Module({
  controllers: [PaymentCardsController],
  providers: [PaymentCardsService],
})
export class PaymentCardsModule {}
