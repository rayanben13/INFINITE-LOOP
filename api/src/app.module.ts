import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CommentsModule } from './comments/comments.module.js';
import { IngredientsModule } from './ingredients/ingredients.module.js';
import { MealScheduleModule } from './meal-schedule/meal-schedule.module.js';
import { MealsModule } from './meals/meals.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { RatingsModule } from './ratings/ratings.module.js';
import { AuthModule } from './auth/auth.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com,
    // then run `npx @nestjs/observe link` to write your key pair into .env.
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'api',
    }),
    MealsModule,
    IngredientsModule,
    MealScheduleModule,
    CommentsModule,
    RatingsModule,
    PrismaModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
