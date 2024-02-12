import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('MBL users data')
      .setDescription('API description')
      .setVersion('1.0')
      .addTag('payment_cards','Basic payment card information related to the user')
      .addTag('users','User data')
      .addTag('phones','Phones user data')
      .addTag('applications','Create a new application token')
      .addTag('address','Address user data')
      .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document); 
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  await app.listen(3000);
}
bootstrap();
