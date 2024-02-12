import { Module } from "@nestjs/common";
import { LogService } from "./log.service";
import { PrismaService } from "src/database/PrismaService";

@Module({
    providers: [LogService, PrismaService]
})
export class LogModule {}