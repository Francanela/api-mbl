import { Injectable } from '@nestjs/common';
import { Prisma, PaymentCard } from '@prisma/client';
import { CreatePaymentCardDto } from './dto/create-payment-card.dto';
import { UpdatePaymentCardDto } from './dto/update-payment-card.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PaymentCardsService {
    constructor(private prisma: PrismaService) {}
    
    async create(createPaymentCardDto: CreatePaymentCardDto): Promise<any> {
      // return this.prisma.paymentCard.create({data: createPaymentCardDto});
    }

    findCard(id: number) {
      return this.prisma.paymentCard.findUnique({
        where:{
          id: id,
        }
      })    
    }

    findUserCards(userId: number) {
      return this.prisma.paymentCard.findMany({
        where:{
          user_id: userId,
          deleted_at: null
        }
      })    
    }

    update(id: number, updatePaymentCardDto: UpdatePaymentCardDto) {
      return this.prisma.paymentCard.update({
        where: {id: id},
        data: updatePaymentCardDto
      })
    }

    remove(id: number) {
      return this.prisma.paymentCard.update({
        where: {id: id},
        data: {deleted_at: new Date()}
      })
    }
}