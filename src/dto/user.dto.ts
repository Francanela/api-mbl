import { IsEmail, IsString, IsOptional, Length, MinDate, IsISO8601 } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  
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
  @IsEmail()
  @Length(11, 50)
  cpf: string

  @ApiProperty()
  @IsEmail()
  email: string; // Replace with desired unique identifier type (email, CPF, etc.)

  @ApiProperty()
  @IsString()
  @Length(8, 50)
  password: string; // Assuma que o hash de senha está implementado em outro lugar

  @ApiProperty()
  @IsISO8601({strict: true})
  @MinDate(new Date(1900, 1, 1)) // Ajuste a data mínima conforme necessário
  dataNascimento: Date;
}
