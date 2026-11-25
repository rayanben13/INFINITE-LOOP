import { Suspense } from "react";
import VerifyEmailForm from "../../../components/auth/verify-email-form";

export default function VerifyEmailPage() {
    return (
        <Suspense fallback={<p>جاري تحميل الصفحة...</p>}>
            <VerifyEmailForm />
        </Suspense>
    );
}