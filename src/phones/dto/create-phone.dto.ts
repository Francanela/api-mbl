import { ApiProperty } from "@nestjs/swagger"; 
import { IsBoolean, IsOptional, IsString, Length } from "class-validator";

export class CreatePhoneDto {
    @ApiProperty()
    @IsString()
    @Length(11,20)
    phoneNumber: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    mainPhone: boolean;
}
