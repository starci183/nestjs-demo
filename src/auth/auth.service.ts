// injectable laf dependency inject, tuc la neu class nao

import { Injectable } from "@nestjs/common";
import { SignUpRequestDto } from "./auth.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/database/mysql/user.entity";
import { Repository } from "typeorm";

// ma co annotation nay thi mac dinh no DEO can new
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {

    }
    
    async signUp(dto: SignUpRequestDto) {
        await this.userRepository.save(dto)
    }
}
