import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { Category } from "../../generated/prisma/client.js";

class MealIngredientDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    quantity?: number;

    @IsOptional()
    @IsString()
    unit?: string;
}

export class CreateMealDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsEnum(Category)
    category: Category;

    @IsOptional()
    @IsString()
    image?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MealIngredientDto)
    ingredients: MealIngredientDto[];
}