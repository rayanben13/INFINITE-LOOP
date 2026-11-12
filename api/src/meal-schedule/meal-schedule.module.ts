import { Module } from '@nestjs/common';
import { MealScheduleService } from './meal-schedule.service.js';
import { MealScheduleController } from './meal-schedule.controller.js';

@Module({
  controllers: [MealScheduleController],
  providers: [MealScheduleService],
})
export class MealScheduleModule {}
