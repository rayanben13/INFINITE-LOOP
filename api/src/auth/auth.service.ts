import { BadRequestException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import * as crypto from 'crypto';
import { Response } from 'express';
import * as nodemailer from 'nodemailer';
import { PrismaService } from '../prisma/prisma.service.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';

@Injectable()
export class AuthService {
  private transporter: nodemailer.Transporter;

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {
    // إعداد خدمة Nodemailer (استبدل البيانات بمعلومات SMTP الخاصة بك أو استخدم Gmail / Mailtrap)
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
      port: Number(process.env.SMTP_PORT) || 2525,
      auth: {
        user: process.env.SMTP_USER || 'your_smtp_user',
        pass: process.env.SMTP_PASS || 'your_smtp_pass',
      },
    });
  }

  // 1. التسجيل مع إرسال إيميل التفعيل
  async register(dto: { name: string; email: string; password: string }, res: Response) {
    const existingUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existingUser) {
      throw new BadRequestException('البريد الإلكتروني مستخدم بالفعل');
    }

    const hashedPassword = await argon2.hash(dto.password);
    const verifyToken = crypto.randomBytes(32).toString('hex');

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
        emailVerifyToken: verifyToken,
      },
    });

    // إرسال بريد الكتروني لتأكيد الحساب
    const verifyUrl = `http://localhost:3000/auth/verify-email?token=${verifyToken}`;
    try {
      await this.transporter.sendMail({
        from: '"Meal Management App" <no-reply@mealapp.com>',
        to: user.email,
        subject: 'تأكيد بريدك الإلكتروني',
        html: `<p>مرحباً ${user.name}، اضغط على الرابط التالي لتأكيد بريدك الإلكتروني:</p><a href="${verifyUrl}">تأكيد البريد</a>`,
      });
    } catch (mailError) {
      console.error('Mail send failed:', mailError);
    }

    return this.generateTokensAndSetCookie(user.id, user.email, res);
  }

  // 2. تأكيد البريد الإلكتروني
  async verifyEmail(token: string) {
    const user = await this.prisma.user.findUnique({
      where: { emailVerifyToken: token },
    });

    if (!user) {
      throw new BadRequestException('رمز التأكيد غير صالح أو منتهي الصلاحية');
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        isEmailVerified: true,
        emailVerifyToken: null,
      },
    });

    return { message: 'تم تفعيل البريد الإلكتروني بنجاح!' };
  }

  async resendVerificationEmail(email: string) {
    const normalizedEmail = email.trim().toLowerCase();

    const user = await this.prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      return { message: 'إذا كان البريد مسجلاً لدينا، فقد تم إرسال رابط التأكيد.' };
    }

    if (user.isEmailVerified) {
      throw new BadRequestException('هذا البريد الإلكتروني مؤكد بالفعل.');
    }

    const emailVerifyToken = crypto.randomBytes(32).toString('hex');

    await this.prisma.user.update({
      where: { id: user.id },
      data: { emailVerifyToken },
    });

    const verifyUrl = `${process.env.FRONTEND_URL}/verify-email?token=${emailVerifyToken}`;

    await this.transporter.sendMail({
      to: user.email,
      html: verifyUrl,
    });

    return { message: 'تم إرسال رابط تأكيد جديد إلى بريدك الإلكتروني.' };
  }

  async getMe(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        isEmailVerified: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('المستخدم غير موجود');
    }

    return user;
  }

  // 3. تسجيل الدخول
  async login(dto: LoginAuthDto, res: Response) {

    const user = await this.prisma.user.findUnique({
      where: { email: dto.email }
    });

    if (!user) {
      throw new UnauthorizedException(
        'email or password is incorrect'
      );
    }

    const isValid = await argon2.verify(
      user.password,
      dto.password
    );

    if (!isValid) {
      throw new UnauthorizedException(
        'email or password is incorrect'
      );
    }

    if (!user.isEmailVerified) {
      throw new ForbiddenException(
        "you should verify your email"
      );
    }

    return this.generateTokensAndSetCookie(
      user.id,
      user.email,
      res
    );
  }

  // 4. طلب نسيان كلمة المرور
  async forgotPassword(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { message: 'إذا كان البريد الإلكتروني مسجلاً، فقد تم إرسال تعليمات الاستعادة.' };
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // صالح لمدة 15 دقيقة

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpires: expiresAt,
      },
    });

    const resetUrl = `http://localhost:3000/auth/reset-password?token=${resetToken}`;
    await this.transporter.sendMail({
      from: '"Meal Management App" <no-reply@mealapp.com>',
      to: user.email,
      subject: 'إعادة تعيين كلمة المرور',
      html: `<p>لقد طلبت استعادة كلمة المرور. اضغط على الرابط التالي للمتابعة:</p><a href="${resetUrl}">إعادة تعيين كلمة المرور</a>`,
    });

    return { message: 'تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.' };
  }

  // 5. تعيين كلمة المرور الجديدة
  async resetPassword(token: string, newPass: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: { gte: new Date() },
      },
    });

    if (!user) {
      throw new BadRequestException('رمز إعادة التعيين غير صالح أو منتهي الصلاحية');
    }

    const hashedPassword = await argon2.hash(newPass);

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });

    return { message: 'تم تغيير كلمة المرور بنجاح. يمكنك تسجيل الدخول الآن.' };
  }

  private attachRefreshCookie(res: Response, refreshToken: string) {
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  }

  private async generateTokensAndSetCookie(userId: number, email: string, res: Response) {
    const payload = { sub: userId, email };

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '7d',
    });

    this.attachRefreshCookie(res, refreshToken);

    return { accessToken };
  }

  async refreshTokens(refreshToken: string) {
    try {
      const decoded = await this.jwtService.verifyAsync<{ sub: number; email: string }>(
        refreshToken,
        {
          secret: process.env.JWT_REFRESH_SECRET,
        },
      );

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
        select: { id: true, email: true },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      const payload = { sub: user.id, email: user.email };

      const accessToken = this.jwtService.sign(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '15m',
      });

      const nextRefreshToken = this.jwtService.sign(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      });

      return {
        accessToken,
        refreshToken: nextRefreshToken,
      };
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async refreshWithCookie(
    refreshToken: string | undefined,
    res: Response,
  ): Promise<{ accessToken: string }> {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token is missing');
    }

    const { accessToken, refreshToken: nextRefreshToken } =
      await this.refreshTokens(refreshToken);

    this.attachRefreshCookie(res, nextRefreshToken);
    return { accessToken };
  }
}