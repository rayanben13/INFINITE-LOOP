import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { MealsService } from './meals.service.js';

import { CreateMealDto } from './dto/create-meal.dto.js';
import { UpdateMealDto } from './dto/update-meal.dto.js';

@Controller('meals')
export class MealsController {
  constructor(private mealsService: MealsService) { }

  @Post()
  create(@Body() dto: CreateMealDto) {
    return this.mealsService.create(dto);
  }

  @Get()
  findAll() {
    return this.mealsService.findAll();
  }

  @Get('random')
  random() {
    return this.mealsService.random();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mealsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMealDto,
  ) {
    return this.mealsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mealsService.remove(id);
  }
}