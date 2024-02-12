import { Injectable } from '@nestjs/common';
import { Prisma, PaymentCard } from '@prisma/client';
import { CreatePaymentCardDto } from './dto/create-payment-card.dto';
import { UpdatePaymentCardDto } from './dto/update-payment-card.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PaymentCardsService {
    constructor(private prisma: PrismaService) {}
    
    async create(createPaymentCardDto: CreatePaymentCardDto): Promise<PaymentCard> {
      return this.prisma.paymentCard.create({data: createPaymentCardDto});
    }

    findAll() {
      return `This action returns all paymentCards`;
    }

    findByUser(userId: number) {
      return `This action returns a #${userId} paymentCard`;
    }

    update(id: number, updatePaymentCardDto: UpdatePaymentCardDto) {
      return `This action updates a #${id} paymentCard`;
    }

    remove(id: number) {
      return `This action removes a #${id} paymentCard`;
    }
}