import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  //!configuração do swagger
  const config = new DocumentBuilder()
  .setTitle('API Escola')
  .setDescription(' API para gerenciamento de alunos')
  .setVersion('1.0.0')
  .addTag('alunos')
  .build();
  const document =  SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT ?? 3000);
  Logger.log(`API escola rodando na porta ${await app.getUrl()}`,'Port');
}
await bootstrap();
