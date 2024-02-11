import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('API MBL')
      .setDescription('Lorem')
      .setVersion('1.0')
      .addTag('API')
      .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document); 
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  await app.listen(3000);
}
bootstrap();
