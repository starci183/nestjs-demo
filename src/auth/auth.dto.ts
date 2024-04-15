import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsStrongPassword, Length, Matches } from "class-validator"

export class SignUpRequestDto {
    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsStrongPassword()
    // @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,64}$/gm, {
    //     message:
    //       'Password must be between 6 and 64 characters long with 1 special character and capital character each',
    //   })
    
    password: string

    @ApiProperty()
    @Length(2,50)
    firstName: string

    @ApiProperty()
    @Length(2,50)
    lastName: string
}