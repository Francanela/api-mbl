import { IsEmail, IsString, Length, MinDate } from 'class-validator';

export class CreateUserDto {
  
  name: string;

  @IsString()
  @Length(2, 30)
  lastName: string;

  @IsEmail()
  unique: string; // Replace with desired unique identifier type (email, CPF, etc.)

  @IsString()
  @Length(8, 12)
  password: string; // Assume password hashing is implemented elsewhere

  @MinDate(new Date(1900, 1, 1)) // Adjust minimum date as needed
  dataNascimento: Date;
}