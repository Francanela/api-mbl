import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApplicationsModule } from './applications/applications.module';
import { PhonesModule } from './phones/phones.module';

@Module({
  imports: [UsersModule, ApplicationsModule, PhonesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
