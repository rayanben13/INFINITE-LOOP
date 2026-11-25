"use client";

import { useResendVerification, useVerifyEmail } from "@/lib/hooks/auth-mutation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


export default function VerifyEmailForm() {
    const searchParams = useSearchParams();

    const token = searchParams.get("token");
    const emailFromQuery = searchParams.get("email") || "";

    const [email, setEmail] = useState(emailFromQuery);

    // Email verification
    const {
        data: verificationData,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useVerifyEmail(token);

    // Resend verification
    const {
        mutate: resend,
        isPending: isResending,
        isSuccess: resendSuccess,
        isError: resendIsError,
        data: resendData,
        error: resendError,
    } = useResendVerification();

    function handleResend(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!email.trim()) return;

        resend(email.trim());
    }

    return (
        <div className="mx-auto max-w-md space-y-4 p-6">

            <h1 className="text-xl font-bold">
                تأكيد البريد الإلكتروني
            </h1>

            {!token && (
                <p>
                    يرجى التحقق من صندوق الوارد
                    {email ? ` للبريد ${email}` : ""}
                    والضغط على رابط التفعيل.
                </p>
            )}

            {isLoading && (
                <p>جاري تأكيد بريدك الإلكتروني...</p>
            )}

            {isSuccess && (
                <div>
                    <p>{verificationData.message}</p>

                    <Link href="/login" className="mt-3 inline-block underline">
                        الانتقال إلى تسجيل الدخول
                    </Link>
                </div>
            )}

            {isError && (
                <p className="text-red-500">
                    {error.message}
                </p>
            )}

            {!isSuccess && (
                <form
                    onSubmit={handleResend}
                    className="space-y-3 border-t pt-4"
                >
                    <label className="block text-sm font-medium">
                        إعادة إرسال رابط التأكيد
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full rounded border px-3 py-2"
                        required
                    />

                    <button
                        type="submit"
                        disabled={isResending}
                        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
                    >
                        {isResending
                            ? "جاري الإرسال..."
                            : "إعادة إرسال الرابط"}
                    </button>

                    {resendSuccess && (
                        <p className="text-green-600">
                            {resendData.message}
                        </p>
                    )}

                    {resendIsError && (
                        <p className="text-red-500">
                            {resendError.message}
                        </p>
                    )}
                </form>
            )}

            <Link href="/login" className="inline-block text-sm underline">
                العودة إلى تسجيل الدخول
            </Link>

        </div>
    );
}