import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FruitEntity } from "src/database/mysql/fruit.entity";
import { UserEntity } from "src/database/mysql/user.entity";
import { MongooseModule } from "@nestjs/mongoose";
import { DeptraiEntity, DeptraiEntitySchema } from "src/database/mongodb/deptrai.schema";
import { JwtAuthGuard } from "src/guards/jwt.guard";
import { JwtStrategy } from "src/guards/jwt.strategy";
import { JwtService } from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            FruitEntity
        ]),
        MongooseModule.forFeature([{ name:
             DeptraiEntity.name, 
             schema: DeptraiEntitySchema
             }])
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, JwtAuthGuard, JwtService],
})
export class AuthModule {}