/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule, LibrosModule, CategoriasModule,
         AuthModule, AutoresModule, ProfileModule } from './modules/index';
import { SeedModule } from './modules/seed/seed.module';
@Module({
  imports: [ 
    ClientesModule,
    LibrosModule,
    CategoriasModule,
    AutoresModule,
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize:true
    }),
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
