import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) { }

  async create(userId: number, dto: CreateCommentDto) {
    const meal = await this.prisma.meal.findUnique({
      where: { id: dto.mealId },
    });

    if (!meal) {
      throw new NotFoundException('Meal not found');
    }

    return this.prisma.comment.create({
      data: {
        ...dto,
        userId
      },
    });
  }

  async findByMeal(mealId: number) {
    return this.prisma.comment.findMany({
      where: { mealId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async remove(id: number) {
    return this.prisma.comment.delete({
      where: { id },
    });
  }
}