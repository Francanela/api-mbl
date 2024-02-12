import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApplicationsModule } from './applications/applications.module';
import { PhonesModule } from './phones/phones.module';
import { AddressModule } from './address/address.module';
import { PaymentCardsModule } from './payment-cards/payment-cards.module';

@Module({
  imports: [UsersModule, ApplicationsModule, PhonesModule,AddressModule, PaymentCardsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
