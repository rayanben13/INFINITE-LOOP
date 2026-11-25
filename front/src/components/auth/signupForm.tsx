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
import { useSignup } from '@/lib/hooks/auth-mutation';
import { SignupInput, signupSchema } from '@/lib/zod/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, Loader2, Lock, Mail, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function SignupForm({ onSuccess }: { onSuccess?: (accessToken: string) => void }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupInput>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    const signupMutation = useSignup((data) => {
        onSuccess?.(data.accessToken);
    });

    const onSubmit = (data: SignupInput) => {
        signupMutation.mutate(data);
    };

    return (
        <Card className="w-full max-w-md border-border/60 shadow-sm">
            <CardHeader className="space-y-1 text-right">
                <CardTitle className="text-2xl font-bold tracking-tight">إنشاء حساب جديد</CardTitle>
                <CardDescription>أنشئ حسابك لبدء تنظيم خطط الوجبات والمكونات.</CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                    <div className="space-y-2">
                        <Label htmlFor="name">الاسم الكامل</Label>
                        <div className="relative">
                            <User className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                id="name"
                                type="text"
                                autoComplete="name"
                                placeholder="الاسم الكامل"
                                className="pr-9"
                                aria-invalid={!!errors.name}
                                {...register('name')}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-xs font-medium text-destructive">{errors.name.message}</p>
                        )}
                    </div>

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
                            <p className="text-xs font-medium text-destructive">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">كلمة المرور</Label>
                        <div className="relative">
                            <Lock className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="••••••••"
                                className="pr-9 text-left"
                                dir="ltr"
                                aria-invalid={!!errors.password}
                                {...register('password')}
                            />
                        </div>
                        {errors.password && (
                            <p className="text-xs font-medium text-destructive">{errors.password.message}</p>
                        )}
                    </div>

                    {signupMutation.isError && (
                        <Alert variant="destructive" className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 shrink-0" />
                            <AlertDescription>{signupMutation.error.message}</AlertDescription>
                        </Alert>
                    )}

                    <Button type="submit" className="w-full" disabled={signupMutation.isPending}>
                        {signupMutation.isPending ? (
                            <>
                                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                                جاري إنشاء الحساب...
                            </>
                        ) : (
                            'إنشاء حساب'
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}