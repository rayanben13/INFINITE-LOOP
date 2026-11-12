import {
    IsInt,
    Max,
    Min,
} from 'class-validator';

export class CreateRatingDto {
    @IsInt()
    mealId: number;

    @IsInt()
    @Min(1)
    @Max(5)
    score: number;
}