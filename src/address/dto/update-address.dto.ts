import { IsEmail, IsString, IsOptional, Length, MinDate, IsISO8601, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(2, 100)
    street_address: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 10)
    number: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 100)
    additional_details: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(2, 100)
    neighborhood: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(2, 100)
    city: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(2, 100)
    state: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(2, 100)
    country: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(8, 8)
    zipCode: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(2, 100)
    landmark: string;

    @ApiProperty()
    @IsOptional()
    main_address: boolean;
}
