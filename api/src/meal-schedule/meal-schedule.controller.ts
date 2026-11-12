import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-meal-schedule.dto.js';
import { SchedulesService } from './meal-schedule.service.js';


@Controller('schedules')
export class SchedulesController {
  constructor(private service: SchedulesService) { }

  @Post()
  create(@Body() dto: CreateScheduleDto) {
    return this.service.create(dto);
  }

  @Get('daily')
  findByDay(@Query('date') date: string) {
    return this.service.findByDay(date);
  }

  @Get('weekly')
  findByWeek(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.service.findByWeek(startDate, endDate);
  }

  @Get('history')
  history() {
    return this.service.history();
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}