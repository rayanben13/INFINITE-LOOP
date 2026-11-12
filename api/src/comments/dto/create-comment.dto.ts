import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
    @IsInt()
    mealId: number;

    @IsString()
    @IsNotEmpty()
    text: string;
}