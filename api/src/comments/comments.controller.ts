import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { CommentsService } from './comments.service.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';

@Controller('comments')
export class CommentsController {
  constructor(private service: CommentsService) { }

  @Post()
  create(@Body() dto: CreateCommentDto) {
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