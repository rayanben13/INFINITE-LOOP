'use server';

import { LoginInput, loginSchema, SignupInput } from '@/lib/zod/auth-schema';
import { cookies } from 'next/headers';
import { CurrentUser } from '../types/auth-types';

export interface AuthResponse {
  accessToken: string;
}
interface ApiResponse {
  message: string;
}


const API_URL = process.env.NEXT_PUBLIC_API_URL;


export type LoginActionResult =
  | {
    ok: true;
    accessToken: string;
  }
  | {
    ok: false;
    code: 'EMAIL_NOT_VERIFIED' | 'INVALID_CREDENTIALS' | 'VALIDATION_ERROR';
    message: string;
    email?: string;
  };

export async function loginAction(rawData: LoginInput): Promise<LoginActionResult> {
  console.log("tttt")
  const parsed = loginSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      ok: false,
      code: 'VALIDATION_ERROR',
      message: parsed.error.issues[0]?.message || 'بيانات الدخول غير صالحة',
    };
  }
  console.log(parsed.data)

  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(parsed.data),
    cache: 'no-store',
  });


  const result = await res.json();

  if (!res.ok) {
    if (result.message === 'you should verify your email') {
      return {
        ok: false,
        code: 'EMAIL_NOT_VERIFIED',
        message: 'يرجى تأكيد بريدك الإلكتروني أولاً',
        email: parsed.data.email,
      };
    }

    return {

      ok: false,
      code: 'INVALID_CREDENTIALS',
      message: result.message || 'فشل تسجيل الدخول',
    };
  }

  const setCookieHeader = res.headers.get('set-cookie');
  if (setCookieHeader) {
    const match = setCookieHeader.match(/refreshToken=([^;]+)/);
    if (match?.[1]) {
      const cookieStore = await cookies();
      cookieStore.set('refreshToken', match[1], {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 7 * 24 * 60 * 60,
      });
    }
  }

  return {
    ok: true,
    accessToken: result.accessToken,
  };
}


export async function signupRequest(data: SignupInput): Promise<AuthResponse> {
  console.log(data)
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // ضروري لاستقبال وإرسال HttpOnly Cookie الخاص بـ refreshToken
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || 'فشل إنشاء الحساب');
  }

  return result;
}

export async function fetchCurrentUser(accessToken: string): Promise<CurrentUser> {
  const res = await fetch(`${API_URL}/auth/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('تعذر جلب بيانات المستخدم الحالي');
  }

  return res.json();
}



export async function verifyEmail(token: string): Promise<ApiResponse> {
  const res = await fetch(
    `${API_URL}/auth/verify-email?token=${encodeURIComponent(token)}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "رمز التأكيد غير صالح أو منتهي الصلاحية"
    );
  }

  return data;
}

export async function resendVerification(
  email: string
): Promise<ApiResponse> {
  const res = await fetch(`${API_URL}/auth/resend-verification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "تعذر إعادة إرسال رابط التأكيد"
    );
  }

  return data;
}