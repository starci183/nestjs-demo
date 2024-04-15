import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm"
import { UserEntity } from './database/mysql/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    ) {}
 
  //la get
  @Get()
  getHello(): string {
    return "Cuong dep trai 1234"
  }
  
  @Post("sign-up")
  async signUp() {
    await this.userRepository.save({
      email: "deptrai@gmail.com",
      password: "123456",
      firstName: "Cuong",
      lastName: "Dep trai"
    })
  }
}
