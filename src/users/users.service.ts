import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { Console } from 'console';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from 'src/dto/user.dto';


@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateUserDto): Promise<User> {
        console.log(data);
        return this.prisma.user.create({ data: data});
    }

    async findAll() {
        return this.prisma.user.findMany();
    }
}
