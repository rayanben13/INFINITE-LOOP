import { Test, TestingModule } from '@nestjs/testing';
import { MealsController } from './meals.controller.js';
import { MealsService } from './meals.service.js';

describe('MealsController', () => {
  let controller: MealsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealsController],
      providers: [MealsService],
    }).compile();

    controller = module.get<MealsController>(MealsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
