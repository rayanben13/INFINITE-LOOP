import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { JwtStrategy } from './jwtStrategy.js';

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    JwtModule.register({
      global: true, // اختياري: لجعل الـ JwtService متاحاً في كل التطبيق إن أردت
      secret: process.env.JWT_ACCESS_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
