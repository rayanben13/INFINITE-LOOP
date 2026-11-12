import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { CreateRatingDto } from './dto/create-rating.dto.js';
import { RatingsService } from './ratings.service.js';

@Controller('ratings')
export class RatingsController {
  constructor(private readonly service: RatingsService) { }

  @Post()
  create(@Body() dto: CreateRatingDto) {
    return this.service.create(dto);
  }

  @Get('meal/:mealId')
  findByMeal(@Param('mealId', ParseIntPipe) mealId: number) {
    return this.service.findByMeal(mealId);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}