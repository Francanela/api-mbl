import { PartialType } from '@nestjs/mapped-types';
import { CreatePhoneDto } from './create-phone.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class UpdatePhoneDto extends PartialType(CreatePhoneDto) {
    @ApiProperty()
    @IsString()
    @Length(11,20)
    phoneNumber: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    mainPhone: boolean;
}
