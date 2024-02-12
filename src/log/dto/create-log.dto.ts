import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, isNotIn } from "class-validator";

export class CreateLogDto {
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    application_id: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    operation: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    entity: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    data: string
}