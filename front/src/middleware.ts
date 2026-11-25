import { NextRequest, NextResponse } from 'next/server';

const AUTH_ROUTES = ['/login', '/signup'];
const PROTECTED_PREFIXES = ['/dashboard', '/meals'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const hasRefreshToken = request.cookies.has('refreshToken');

    const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));
    const isProtectedRoute = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

    // مستخدم يملك refreshToken ويحاول فتح /login أو /signup
    if (hasRefreshToken && isAuthRoute) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // مستخدم لا يملك refreshToken ويحاول فتح مسار محمي
    if (!hasRefreshToken && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/signup', '/dashboard/:path*', '/meals/:path*'],
};