import { Body, Controller, Get, Param, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpRequestDto } from "./auth.dto";
import { InjectModel } from "@nestjs/mongoose";
import { DeptraiEntity } from "src/database/mongodb/deptrai.schema";
import { Model } from "mongoose";
import { JwtAuthGuard } from "src/guards/jwt.guard";
import { JwtService } from "@nestjs/jwt";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Cuong, Payload } from "./payload.decorator";


@Controller("api/v100/auth")
export class AuthController {
    constructor(private readonly authService: AuthService,
        @InjectModel(DeptraiEntity.name)
    private readonly deptraiModel: Model<DeptraiEntity>,
    private readonly jwtService: JwtService
    ) {}

    @Post("sign-up")
    async signUp(
        @Body() body: SignUpRequestDto
        // @Headers() deptrai: any,
        // @Param
        ) {
        return this.authService.signUp(body)
    }

    @Post("sign-in")
    async signIn(){
        // dang nhap deo cai tk
        return this.jwtService.sign({cuong: "123"}, {
            secret: "cuongdeptrai",
            expiresIn: "2d"
        })
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    async testMongo(
        @Payload() payload: any,
        @Cuong() cuong: any
        ) {
            console.log(payload, cuong)
        // await this.deptraiModel.create({
        //     cuong: "123",
        //     ho: "456",
        //     ten: "789"
        // })
    }
}