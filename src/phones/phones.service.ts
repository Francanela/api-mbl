import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PhonesService {

  constructor(private prisma: PrismaService) {}

  async findOne(id: string) {
    return this.prisma.phone.findUnique({
      where: { id },
    });
  }
}
