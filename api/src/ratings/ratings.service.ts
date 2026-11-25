import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { CreateRatingDto } from './dto/create-rating.dto.js';

@Injectable()
export class RatingsService {
  constructor(private prisma: PrismaService) { }

  async create(userId: number, dto: CreateRatingDto) {
    const meal = await this.prisma.meal.findUnique({
      where: { id: dto.mealId },
    });

    if (!meal) {
      throw new NotFoundException('Meal not found');
    }

    return this.prisma.rating.create({
      data: {
        userId,
        ...dto
      },
    });
  }

  async findByMeal(mealId: number) {
    const ratings = await this.prisma.rating.findMany({
      where: { mealId },
    });

    const average =
      ratings.length > 0
        ? ratings.reduce((sum, rating) => sum + rating.score, 0) /
        ratings.length
        : 0;

    return {
      ratings,
      average: Number(average.toFixed(2)),
      total: ratings.length,
    };
  }

  async remove(id: number) {
    return this.prisma.rating.delete({
      where: { id },
    });
  }
}