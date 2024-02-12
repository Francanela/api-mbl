import { ApiProperty } from "@nestjs/swagger"; 
import { IsBoolean, IsString, Length } from "class-validator";

export class CreatePhoneDto {
    @ApiProperty()
    @IsString()
    @Length(11,20)
    phoneNumber: string;

    @ApiProperty()
    @IsBoolean()
    mainPhone: boolean;
}
