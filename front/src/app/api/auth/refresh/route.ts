import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function POST() {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refreshToken')?.value;

    if (!refreshToken) {
        return NextResponse.json({ message: 'Missing refresh token' }, { status: 401 });
    }

    const res = await fetch(`${API_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Cookie: `refreshToken=${refreshToken}`,
        },
        cache: 'no-store',
    });

    const data = await res.json();

    if (!res.ok || !data.accessToken) {
        cookieStore.delete('refreshToken');
        return NextResponse.json({ message: 'Session expired' }, { status: 401 });
    }

    const setCookieHeader = res.headers.get('set-cookie');
    if (setCookieHeader) {
        const match = setCookieHeader.match(/refreshToken=([^;]+)/);
        if (match?.[1]) {
            cookieStore.set('refreshToken', match[1], {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
                maxAge: 7 * 24 * 60 * 60,
            });
        }
    }

    return NextResponse.json({ accessToken: data.accessToken }, { status: 200 });
}