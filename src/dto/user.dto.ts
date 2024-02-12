import { IsString, IsEmail, Length, MinDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  
  @ApiProperty()
  @IsString()
  @Length(2, 30)
  name: string;

  @ApiProperty()
  @IsString()
  @Length(2, 30)
  lastName: string;

  @ApiProperty()
  @IsEmail()
  unique: string; // Substitua pelo tipo de identificador único desejado (email, CPF, etc.)

  @ApiProperty()
  @IsString()
  @Length(8, 12)
  password: string; // Assuma que o hash de senha está implementado em outro lugar

  @ApiProperty()
  @MinDate(new Date(1900, 1, 1)) // Ajuste a data mínima conforme necessário
  dataNascimento: Date;
  
}