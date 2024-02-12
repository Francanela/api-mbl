import { IsEmail, IsString, IsOptional, Length, MinDate, IsISO8601 } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  
  @ApiProperty()
  @IsString()
  @Length(2, 30)
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(2, 30)
  lastName: string;

  @ApiProperty()
  @Length(11, 14)
  cpf: string

  @ApiProperty()
  @IsEmail()
  email: string; // Replace with desired unique identifier type (email, CPF, etc.)

  @ApiProperty()
  @IsString()
  @Length(8, 12)
  password: string; // Assuma que o hash de senha está implementado em outro lugar

  @ApiProperty()
  @IsISO8601({strict: true})
  dataNascimento: Date;
}
