import { Injectable } from '@nestjs/common';
import { CreatePaymentCardDto } from './dto/create-payment-card.dto';
import { UpdatePaymentCardDto } from './dto/update-payment-card.dto';

@Injectable()
export class PaymentCardsService {
  create(createPaymentCardDto: CreatePaymentCardDto) {
    return 'This action adds a new paymentCard';
  }

  findAll() {
    return `This action returns all paymentCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentCard`;
  }

  update(id: number, updatePaymentCardDto: UpdatePaymentCardDto) {
    return `This action updates a #${id} paymentCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentCard`;
  }
}
