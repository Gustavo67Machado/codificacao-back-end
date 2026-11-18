import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AlunosModule } from './alunos/alunos.module.js'
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import joi from 'joi';

@Module({
  imports: [
    AlunosModule,
    ConfigModule.forRoot({
      isGlobal:true,
      validationSchema: joi.object({
        NODE_ENV: joi.string() 
        .valid('desenvolvimento', 'preoducao', 'teste')
        .default('desenvolvimento'),
        PORT: joi.number().default(3000),
        MONGO_URI: joi.string().required(),
        JWT_SECRET: joi. string().required(),
      })
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(configService: ConfigService)=>({
        uri:configService.get<string>('MONGO_URI'),
      }),
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
