import { Module } from '@nestjs/common';
import { MealScheduleController } from './meal-schedule.controller.js';
import { MealScheduleService } from './meal-schedule.service.js';

@Module({
  controllers: [MealScheduleController],
  providers: [MealScheduleService],
  exports: [MealScheduleService]
})
export class MealScheduleModule { }
