import { Injectable } from '@nestjs/common';
import { Prisma, Application } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/database/PrismaService';
import * as crypto from "crypto";
import { CreateApplicationsDto } from './dto/create-applications.dto';

@Injectable()
export class ApplicationsService {
    constructor(private configService: ConfigService, private prisma: PrismaService) { }

    private getConfig() {
        return { 
            hashBytes: +this.configService.get('HASH_HASH_BYTES'),
            saltBytes: +this.configService.get('HASH_SALT_BYTES'),
            iterations: +this.configService.get('HASH_ITERATIONS'),
            digest: this.configService.get('HASH_DIGEST')
        };
    }

    private generateHash(): string {
        const { iterations, hashBytes, digest } = this.getConfig();
        const randomValue = crypto.randomBytes(16).toString("hex");
        const hash = crypto
            .pbkdf2Sync(randomValue, crypto.randomBytes(hashBytes), iterations, hashBytes, digest)
            .toString("hex");
        return hash;
    }

    async create(data: CreateApplicationsDto): Promise<Application> {
        const token = this.generateHash();
        const createdApplication = await this.prisma.application.create({
            data: {
                ...data,
                token: token,
            }
        });
        
        return createdApplication;
    }
}