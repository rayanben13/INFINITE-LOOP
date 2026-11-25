'use client';

import { useAuthStore } from '@/store/auth-store';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
    AuthResponse,
    fetchCurrentUser,
    loginAction,
    LoginActionResult,
    resendVerification,
    signupRequest,
    verifyEmail,
} from '../actions/auth-action';
import { CurrentUser } from '../types/auth-types';
import { LoginInput, SignupInput } from '../zod/auth-schema';

export function useLogin() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const loginToStore = useAuthStore((state) => state.login);
    const [authError, setAuthError] = useState<string | null>(null);

    const mutation = useMutation<LoginActionResult, Error, LoginInput>({
        mutationFn: loginAction,
        onMutate: () => {
            setAuthError(null);
        },
        onSuccess: async (data) => {
            if (!data.ok) {
                if (data.code === 'EMAIL_NOT_VERIFIED') {
                    const emailParam = data.email
                        ? `?email=${encodeURIComponent(data.email)}`
                        : '';
                    router.push(`/verify-email${emailParam}`);
                    return;
                }

                setAuthError(data.message);
                return;
            }

            loginToStore(data.accessToken);
            await queryClient.invalidateQueries({ queryKey: ['auth', 'me'] });
            router.push('/dashboard');
        },
        onError: (error) => {
            setAuthError(error.message || 'حدث خطأ غير متوقع أثناء تسجيل الدخول');
        },
    });

    return {
        ...mutation,
        authError,
    };
}

export function useSignup(onSuccess?: (data: AuthResponse) => void) {
    return useMutation<AuthResponse, Error, SignupInput>({
        mutationFn: signupRequest,
        onSuccess,
    });
}

export function useCurrentUser(accessToken: string | null) {
    return useQuery<CurrentUser, Error>({
        queryKey: ['auth', 'me', accessToken],
        queryFn: () => fetchCurrentUser(accessToken!),
        enabled: Boolean(accessToken),
        staleTime: 5 * 60 * 1000,
        retry: false,
    });
}

export function useVerifyEmail(token: string | null) {
    return useQuery({
        queryKey: ["verify-email", token],

        queryFn: () => verifyEmail(token!),

        enabled: !!token,

        retry: false,

        refetchOnWindowFocus: false,
    });
}

export function useResendVerification() {
    return useMutation({
        mutationFn: (email: string) =>
            resendVerification(email.trim()),
    });
}