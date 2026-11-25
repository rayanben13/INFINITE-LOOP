import { Global, Module } from '@nestjs/common';
import { MealsController } from './meals.controller.js';
import { MealsService } from './meals.service.js';

@Global()
@Module({
  controllers: [MealsController],
  providers: [MealsService],
  exports: [MealsService]
})
export class MealsModule { }
