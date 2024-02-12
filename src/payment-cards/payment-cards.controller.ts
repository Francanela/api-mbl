import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentCardsService } from './payment-cards.service';
import { CreatePaymentCardDto } from './dto/create-payment-card.dto';
import { UpdatePaymentCardDto } from './dto/update-payment-card.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('user/:userId/payment-cards')
@ApiParam({ name: 'userId', description: 'User ID' }) // Adicione esta anotação para informar ao Swagger sobre o parâmetro de rota
export class PaymentCardsController {
  constructor(private readonly paymentCardsService: PaymentCardsService) {}

  @Post()
  create(@Param('userId') userId: number, @Body() createPaymentCardDto: CreatePaymentCardDto) {
    createPaymentCardDto.user_id = userId;
    return this.paymentCardsService.create(createPaymentCardDto);
  }
  
  @Get()
  findAll(@Param('userId') userId: number) {
    return this.paymentCardsService.findAll();
  }

  @Get(':id')
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
