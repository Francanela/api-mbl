import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, isNotIn } from "class-validator";

export class CreateLogDto {

    constructor(
        application_id: number,
        operation: string,
        entity: string,
        data: string
    ) {
        this.application_id = application_id
        this.operation = operation
        this.entity = entity
        this.data = data
    }

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