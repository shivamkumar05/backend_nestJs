import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import { PropertyController } from './property/property.controller';

@Module({
  imports: [TypeOrmModule.forRoot(pgConfig)],
  controllers: [AppController,
    PropertyController
  ],
  providers: [AppService],
})
export class AppModule {}
