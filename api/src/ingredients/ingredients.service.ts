import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.ingredient.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async create(name: string) {
    const existing = await this.prisma.ingredient.findUnique({
      where: { name },
    });

    if (existing) {
      throw new ConflictException('Ingredient already exists');
    }

    return this.prisma.ingredient.create({
      data: { name },
    });
  }

  async remove(id: number) {
    return this.prisma.ingredient.delete({
      where: { id },
    });
  }
}