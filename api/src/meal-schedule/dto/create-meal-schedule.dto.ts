import {
    IsDateString,
    IsInt
} from 'class-validator';


export class CreateScheduleDto {
    @IsInt()
    mealId: number;

    @IsDateString()
    scheduledDate: string;


}