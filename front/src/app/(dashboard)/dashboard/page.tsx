'use client';

import { useCurrentUser } from '@/lib/hooks/auth-mutation';
import { useAuthStore } from '@/store/auth-store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function DashboardPage() {
    const router = useRouter();
    const accessToken = useAuthStore(
        (state) => state.accessToken
    );
    const { data, isLoading, isError } = useCurrentUser(accessToken);

    useEffect(() => {
        if (!isLoading && (isError || !data)) {
            router.replace('/login');
        }
    }, [isLoading, isError, data, router]);

    if (isLoading) {
        return <div className='flex items-center justify-center'>
            <div>جاري التحقق من الجلسة...</div>
        </div>;
    }
    console.log("dd", data)
    console.log("token", accessToken)

    if (!data) {
        return <div>test</div>;
    }

    return <div>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
        <h1>DashboardPage</h1>
    </div>;
}

export default DashboardPage;