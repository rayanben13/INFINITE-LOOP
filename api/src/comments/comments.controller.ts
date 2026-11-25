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
import { CommentsService } from './comments.service.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';

@Controller('comments')
export class CommentsController {
  constructor(private service: CommentsService) { }

  @Post()
  create(
    @Req() req: types.AuthenticatedRequest,
    @Body() dto: CreateCommentDto) {
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