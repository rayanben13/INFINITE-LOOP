import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';

import * as types from '../types/types.js';
import { CreateRatingDto } from './dto/create-rating.dto.js';
import { RatingsService } from './ratings.service.js';

@Controller('ratings')
export class RatingsController {
  constructor(private readonly service: RatingsService) { }

  @Post()
  create(
    @Req() req: types.AuthenticatedRequest,
    @Body() dto: CreateRatingDto) {
    const userId = req.user.userId;

    return this.service.create(userId, dto);
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