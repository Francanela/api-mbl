import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateLogDto } from "./dto/create-log.dto";
import { Log } from "@prisma/client";

@Injectable()
export class LogService {
    constructor(private readonly prisma: PrismaService) {}

    async log(data: CreateLogDto): Promise<Log> {
        return this.prisma.log.create({data: data}) 
    }
}