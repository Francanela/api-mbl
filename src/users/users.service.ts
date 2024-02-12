import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as crypto from "crypto";
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private configService: ConfigService, private prisma: PrismaService) { }

    private getConfig() {
        return {
            hashBytes: +this.configService.get('HASH_HASH_BYTES'),
            saltBytes: +this.configService.get('HASH_SALT_BYTES'),
            iterations: +this.configService.get('HASH_ITERATIONS'),
            digest: this.configService.get('HASH_DIGEST')
        };
    }

    private generatePasswordHash(password: string) {
        const { iterations, hashBytes, digest, saltBytes } = this.getConfig();
        const salt = crypto.randomBytes(saltBytes).toString("hex");
        const hash = crypto
            .pbkdf2Sync(password, salt, iterations, hashBytes, digest)
            .toString("hex");
        return [salt, hash].join("$");
    }

    private verifyPassword(password: string, combined: string) {
        const { iterations, hashBytes, digest } = this.getConfig();
        const [salt, originalHash] = combined.split("$");
        const hash = crypto
            .pbkdf2Sync(password, salt, iterations, hashBytes, digest)
            .toString("hex");
        return hash === originalHash;
    }

    async findOne(id: number) {
        return this.prisma.user.findUnique({
            where: { id }
        })
    }

    async create(data: CreateUserDto): Promise<User> {
        return this.prisma.user.create({
            data: {
                ...data,
                ...{ password: this.generatePasswordHash(data.password) }
            }
        });
    }

    async update(id: number, data: UpdateUserDto): Promise<User> {
        let model = data
        if (model.password !== undefined) {
            Object.assign(model, { password: this.generatePasswordHash(model.password) })
        }
        return this.prisma.user.update({
            where: { id: id },
            data: data,
        })
    }

    async checkLogin(email: string, password: string) {
        let model =  await this.prisma.user.findUnique({
            where: { email }
        });
        //if (!model) return false;
        return model && this.verifyPassword(password, model.password);
    }

    async findAll() {
        return this.prisma.user.findMany();
    }
}
