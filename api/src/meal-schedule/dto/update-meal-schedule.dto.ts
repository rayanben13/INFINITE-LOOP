import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduleDto } from './create-meal-schedule.dto.js';

export class UpdateMealScheduleDto extends PartialType(CreateScheduleDto) { }
