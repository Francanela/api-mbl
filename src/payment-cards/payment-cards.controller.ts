import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards } from '@nestjs/common';
import { PaymentCardsService } from './payment-cards.service';
import { CreatePaymentCardDto } from './dto/create-payment-card.dto';
import { UpdatePaymentCardDto } from './dto/update-payment-card.dto';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CustomInterceptors } from 'src/custom.interceptors';
import { JwtAuthGuard } from 'src/auth/auth.service';

@ApiTags('payment_cards')
@Controller('user/:userId/payment-cards')
@ApiParam({ name: 'userId', description: 'User ID' }) // Adicione esta anotação para informar ao Swagger sobre o parâmetro de rota
@UseInterceptors(CustomInterceptors)
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PaymentCardsController {
  constructor(private readonly paymentCardsService: PaymentCardsService) {}

  @Post()
  create(@Param('userId') userId: number, @Body() createPaymentCardDto: CreatePaymentCardDto) {
    createPaymentCardDto.user_id = Number(userId);
    return this.paymentCardsService.create(createPaymentCardDto);
  }
  
  @Get()
  findAll(@Param('userId') userId: number) {
    return this.paymentCardsService.findUserCards(+userId);
  }

  @Get(':id')
  findOne(@Param('id') userId: number) {
    return this.paymentCardsService.findCard(+userId);
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
