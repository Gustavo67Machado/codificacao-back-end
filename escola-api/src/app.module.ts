import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AlunosModule } from './alunos/alunos.module.js'
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import joi from 'joi';
import type { ConfigType } from '@nestjs/config';
import databaseConfig from './config/database.config.js';
import authConfig from './config/auth.config.js';

@Module({
  imports: [
    AlunosModule,
    ConfigModule.forRoot({
      isGlobal:true,
      load:[databaseConfig, authConfig],
      // validationSchema: joi.object({
      //   NODE_ENV: joi.string() 
      //   .valid('desenvolvimento', 'preoducao', 'teste')
      //   .default('desenvolvimento'),
      //   PORT: joi.number().default(3000),
      //   MONGO_URI: joi.string().required(),
      //   JWT_SECRET: joi. string().required(),
      // }),
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[databaseConfig.KEY],
      useFactory:(dbconfig:ConfigType<typeof databaseConfig>)=>({
        uri:dbconfig.uri,
        maxPoolSize: dbconfig.maxPoolSize,
      }),
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
