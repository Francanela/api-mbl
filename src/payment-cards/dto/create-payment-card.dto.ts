import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional, Length, MinDate, IsISO8601, IsNumber } from 'class-validator';

export class CreatePaymentCardDto {
    @ApiProperty()
    @IsNumber()
    user_id: number

    @IsString()
    @ApiProperty()
    plataform_name: string

    @IsString()
    @ApiProperty()
    plataform_id: string

    @IsNumber()
    @ApiProperty()
    card_number_prefix: number

    @IsNumber()
    @ApiProperty()
    card_number_sufix: number

    @ApiProperty()
    @IsString()
    card_brand: string
}