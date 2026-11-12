import { Module } from '@nestjs/common';
import { MealsService } from './meals.service.js';
import { MealsController } from './meals.controller.js';

@Module({
  controllers: [MealsController],
  providers: [MealsService],
})
export class MealsModule {}
