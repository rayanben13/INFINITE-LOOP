'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/lib/hooks/auth-mutation';
import { LoginInput, loginSchema } from '@/lib/zod/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, Loader2, Lock, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function LoginForm({
    onSuccess,
}: {
    onSuccess?: (accessToken: string) => void;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const loginMutation = useLogin();

    const onSubmit = (data: LoginInput) => {
        loginMutation.mutate(data, {
            onSuccess: (result) => {
                if (!result.ok) {
                    return;
                }

                // Successful login
                onSuccess?.(result.accessToken);
            },
        });
    };

    // Expected authentication error
    const authError =
        loginMutation.isSuccess && !loginMutation.data.ok
            ? loginMutation.data.message
            : null;

    // Unexpected error (network error, server unavailable, etc.)
    const unexpectedError = loginMutation.isError
        ? loginMutation.error.message
        : null;

    return (
        <Card className="w-full max-w-md border-border/60 shadow-sm">
            <CardHeader className="space-y-1 text-right">
                <CardTitle className="text-2xl font-bold tracking-tight">
                    تسجيل الدخول
                </CardTitle>

                <CardDescription>
                    أدخل بريدك الإلكتروني وكلمة المرور للوصول إلى خطط وجباتك.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                    noValidate
                >
                    <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>

                        <div className="relative">
                            <Mail className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="name@example.com"
                                className="pr-9 text-left"
                                dir="ltr"
                                aria-invalid={!!errors.email}
                                {...register('email')}
                            />
                        </div>

                        {errors.email && (
                            <p className="text-xs font-medium text-destructive">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">كلمة المرور</Label>

                        <div className="relative">
                            <Lock className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="••••••••"
                                className="pr-9 text-left"
                                dir="ltr"
                                aria-invalid={!!errors.password}
                                {...register('password')}
                            />
                        </div>

                        {errors.password && (
                            <p className="text-xs font-medium text-destructive">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {(authError || unexpectedError) && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                                {authError || unexpectedError}
                            </AlertDescription>
                        </Alert>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={loginMutation.isPending}
                    >
                        {loginMutation.isPending ? (
                            <>
                                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                                جاري الدخول...
                            </>
                        ) : (
                            'تسجيل الدخول'
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}