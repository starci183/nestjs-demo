import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './database/mysql/user.entity';
import { FruitEntity } from './database/mysql/fruit.entity';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
        UserEntity,
        FruitEntity
    ]),
    MongooseModule.forRoot(`mongodb://localhost:27018`, {
            user: "starci",
            pass: "Cuong123_A",
            dbName: "cuongdeptrai",
        }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'deptrai',
      synchronize: true,
      autoLoadEntities: true,
      timezone: 'Z',
    }),
  ],
  controllers: [AppController],
  providers: [AppService,
    //cau hinh validation
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
  },],
})
export class AppModule {}
