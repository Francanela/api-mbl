import { IsEmail, IsString, IsOptional, Length, MinDate, IsISO8601 } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateApplicationsDto {
    
    @ApiProperty()
    @IsString()
    @Length(2, 100)
    name: string;
         
}
