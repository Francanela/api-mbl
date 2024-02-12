import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional, Length, MinDate, IsISO8601, IsNumber } from 'class-validator';

export class CreatePaymentCardDto {
    
    user_id: number

    @ApiProperty()
    @IsString()
    plataform_name: string

    @ApiProperty()
    @IsString()
    plataform_id: string

    @ApiProperty()
    @IsNumber()
    card_number_prefix: number

    @ApiProperty()
    @IsNumber()
    card_number_sufix: number

    @ApiProperty()
    @IsString()
    card_brand: string
}