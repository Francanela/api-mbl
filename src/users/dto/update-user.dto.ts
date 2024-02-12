import { IsEmail, IsString, IsOptional, Length, MinDate, IsISO8601 } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto {
  
  @ApiProperty()
  @IsString()
  @Length(2, 100)
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(2, 100)
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(8, 50)
  password: string; // Assuma que o hash de senha está implementado em outro lugar

  @ApiProperty()
  @IsISO8601({strict: true})
  dataNascimento: Date;
}
