import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApplicationsModule } from './applications/applications.module';
import { PhonesModule } from './phones/phones.module';
import { AddressModule } from './address/address.module';
import { PaymentCardsModule } from './payment-cards/payment-cards.module';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ApplicationsService } from './applications/applications.service';
import { PrismaService } from './database/PrismaService';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    ApplicationsModule,
    PhonesModule,
    PaymentCardsModule,
    AddressModule,
    PassportModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, JwtAuthGuard],
})

export class AppModule { }
