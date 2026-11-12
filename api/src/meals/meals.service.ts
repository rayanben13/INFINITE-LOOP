import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { CreateMealDto } from './dto/create-meal.dto.js';
import { UpdateMealDto } from './dto/update-meal.dto.js';

@Injectable()
export class MealsService {
  constructor(private prisma: PrismaService) { }

  // Create meal
  async create(dto: CreateMealDto) {
    const { ingredients, ...mealData } = dto;

    return this.prisma.meal.create({
      data: {
        ...mealData,

        ingredients: {
          create: ingredients.map((item) => ({
            quantity: item.quantity,
            unit: item.unit,

            ingredient: {
              connectOrCreate: {
                where: {
                  name: item.name,
                },
                create: {
                  name: item.name,
                },
              },
            },
          })),
        },
      },

      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });
  }

  // Get all meals
  async findAll() {
    return this.prisma.meal.findMany({
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
        ratings: true,
        comments: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // Get one meal
  async findOne(id: number) {
    const meal = await this.prisma.meal.findUnique({
      where: { id },
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
        ratings: true,
        comments: true,
      },
    });

    if (!meal) {
      throw new NotFoundException('Meal not found');
    }

    return meal;
  }

  // Update meal
  async update(id: number, dto: UpdateMealDto) {
    await this.findOne(id);

    const { ingredients, ...mealData } = dto;

    return this.prisma.meal.update({
      where: { id },

      data: {
        ...mealData,

        ...(ingredients && {
          ingredients: {
            deleteMany: {},
            create: ingredients.map((item) => ({
              quantity: item.quantity,
              unit: item.unit,

              ingredient: {
                connectOrCreate: {
                  where: { name: item.name },
                  create: { name: item.name },
                },
              },
            })),
          },
        }),
      },

      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });
  }

  // Delete meal
  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.meal.delete({
      where: { id },
    });
  }

  // Random meal
  async random() {
    const count = await this.prisma.meal.count();

    if (!count) {
      throw new NotFoundException('No meals available');
    }

    const skip = Math.floor(Math.random() * count);

    return this.prisma.meal.findFirst({
      skip,
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });
  }
}