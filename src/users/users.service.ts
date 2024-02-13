import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as crypto from "crypto";
import { UpdateUserDto } from './dto/update-user.dto';
import { LogService } from 'src/log/log.service';
import { LogConsts } from 'src/commons/const-object.commons';
import { CreateLogDto } from 'src/log/dto/create-log.dto';

@Injectable()
export class UsersService {
    constructor(
        private configService: ConfigService,
        private prisma: PrismaService,
        private readonly logService: LogService,
        private readonly logConst: LogConsts
    ) { }

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
        const existedUserWithEmail = this.prisma.user.findFirst({
            where:{
                email:data.email
            }
        })

        if(existedUserWithEmail !== null) {
            throw new ConflictException("This email is already associatedwith another user!")
        }

        const createdUser = this.prisma.user.create({
            data: {
                ...data,
                ...{ password: this.generatePasswordHash(data.password) }
            }
        })

        this.logService.log(
            new CreateLogDto(
                1,
                this.logConst.createOperation,
                this.logConst.userEntity,
                (await createdUser).id.toString()
            )
        )


        return createdUser;
    }

    async update(id: number, data: UpdateUserDto): Promise<User> {
        let model = data
        if (model.password !== undefined) {
            Object.assign(model, { password: this.generatePasswordHash(model.password) })
        }

        const originalUser = (await this.findOne(id))

        this.logService.log(
            new CreateLogDto(
                1,
                this.logConst.updateOperation,
                this.logConst.userEntity,
                JSON.stringify(originalUser)
            )
        )

        return this.prisma.user.update({
            where: { id: id },
            data: data,
        })
    }

    async checkLogin(email: string, password: string) {
        let model = await this.prisma.user.findUnique({
            where: { email }
        });
        //if (!model) return false;
        return model && this.verifyPassword(password, model.password);
    }

    async findAll() {
        return this.prisma.user.findMany();
    }
}
