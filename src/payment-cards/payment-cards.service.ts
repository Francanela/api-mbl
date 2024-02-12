import { Injectable } from '@nestjs/common';
import { Prisma, PaymentCard } from '@prisma/client';
import { CreatePaymentCardDto } from './dto/create-payment-card.dto';
import { UpdatePaymentCardDto } from './dto/update-payment-card.dto';
import { PrismaService } from 'src/database/PrismaService';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';
import { CreateLogDto } from 'src/log/dto/create-log.dto';

@Injectable()
export class PaymentCardsService {
    constructor(
      private prisma: PrismaService,
      private readonly logService: LogService,
      private readonly logConst: LogConsts
    ) {}
    
    async create(createPaymentCardDto: CreatePaymentCardDto) {
      const createdCard = await this.prisma.paymentCard.create({
        data: createPaymentCardDto
      });

      this.logService.log(
        new CreateLogDto(
        1,
        this.logConst.createOperation,
        this.logConst.paymentCardEntity,
        createdCard.id.toString()
        )
      )
      return createdCard;
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

    async update(id: number, updatePaymentCardDto: UpdatePaymentCardDto) {
      const originalPaymentCard = ( await this.findCard(id)) 

      this.logService.log(
        new CreateLogDto(
          1,
          this.logConst.updateOperation,
          this.logConst.paymentCardEntity,
          JSON.stringify(originalPaymentCard)
        )
      )

      return this.prisma.paymentCard.update({
        where: {id: id},
        data: updatePaymentCardDto
      })
    }

    remove(id: number) {
      const removedCard = this.prisma.paymentCard.update({
        where: {id: id},
        data: {deleted_at: new Date()}
      })

      this.logService.log(
        new CreateLogDto(
          1,
          this.logConst.deleteOperation,
          this.logConst.paymentCardEntity,
          id.toString()
        )
      )

      return removedCard
    }
}