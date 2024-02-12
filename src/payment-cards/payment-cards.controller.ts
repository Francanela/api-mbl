import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentCardsService } from './payment-cards.service';
import { CreatePaymentCardDto } from './dto/create-payment-card.dto';
import { UpdatePaymentCardDto } from './dto/update-payment-card.dto';

@Controller('payment-cards')
export class PaymentCardsController {
  constructor(private readonly paymentCardsService: PaymentCardsService) {}

  @Post()
  create(@Body() createPaymentCardDto: CreatePaymentCardDto) {
    return this.paymentCardsService.create(createPaymentCardDto);
  }

  @Get()
  findAll() {
    return this.paymentCardsService.findAll();
  }

  @Get(':user_id')
  findOne(@Param('id') userId: number) {
    return this.paymentCardsService.findByUser(+userId);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePaymentCardDto: UpdatePaymentCardDto) {
    return this.paymentCardsService.update(+id, updatePaymentCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.paymentCardsService.remove(+id);
  }
}
