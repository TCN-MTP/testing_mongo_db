import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
   MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost/defaultdb'), 
  UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
