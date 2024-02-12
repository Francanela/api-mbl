import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateApplicationsDto {
    
    @ApiProperty()
    @IsString()
    @Length(2, 100)
    name: string;
         
}
