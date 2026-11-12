import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { IngredientsService } from './ingredients.service.js';

@Controller('ingredients')
export class IngredientsController {
  constructor(private service: IngredientsService) { }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body('name') name: string) {
    return this.service.create(name);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}