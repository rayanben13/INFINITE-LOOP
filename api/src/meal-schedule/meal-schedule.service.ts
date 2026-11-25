import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { CreateScheduleDto } from './dto/create-meal-schedule.dto.js';

@Injectable()
export class MealScheduleService {
  constructor(private prisma: PrismaService) { }

  // Add meal to a date
  async create(dto: CreateScheduleDto) {
    const meal = await this.prisma.meal.findUnique({
      where: { id: dto.mealId },
    });

    if (!meal) {
      throw new NotFoundException('Meal not found');
    }

    return this.prisma.mealSchedule.create({
      data: {
        mealId: dto.mealId,
        scheduledDate: new Date(dto.scheduledDate),
      },
      include: {
        meal: true,
      },
    });
  }

  // Daily calendar
  async findByDay(date: string) {
    const start = new Date(`${date}T00:00:00.000Z`);
    const end = new Date(`${date}T00:00:00.000Z`);

    end.setUTCDate(end.getUTCDate() + 1);

    return this.prisma.mealSchedule.findMany({
      where: {
        scheduledDate: {
          gte: start,
          lt: end,
        },
      },
      include: {
        meal: {
          include: {
            ingredients: {
              include: {
                ingredient: true,
              },
            },
          },
        },
      },
      orderBy: {
        scheduledDate: 'asc',
      },
    });
  }

  // Weekly calendar
  async findByWeek(startDate: string, endDate: string) {
    return this.prisma.mealSchedule.findMany({
      where: {
        scheduledDate: {
          gte: new Date(`${startDate}T00:00:00.000Z`),
          lte: new Date(`${endDate}T00:00:00.000Z`),
        },
      },
      include: {
        meal: true,
      },
      orderBy: {
        scheduledDate: 'asc',
      },
    });
  }

  // Meal history
  async history() {
    return this.prisma.mealSchedule.findMany({
      where: {
        scheduledDate: {
          lt: new Date(new Date().toISOString().slice(0, 10)),
        },
      },
      include: {
        meal: true,
      },
      orderBy: {
        scheduledDate: 'desc',
      },
    });
  }

  // Remove scheduled meal
  async remove(id: number) {
    const schedule = await this.prisma.mealSchedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      throw new NotFoundException('Schedule not found');
    }

    return this.prisma.mealSchedule.delete({
      where: { id },
    });
  }
}