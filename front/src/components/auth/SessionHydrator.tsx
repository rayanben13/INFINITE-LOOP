'use client';

import { useAuthStore } from '@/store/auth-store';
import { useEffect, useState } from 'react';

export function SessionHydrator({ children }: { children: React.ReactNode }) {
    const login = useAuthStore((state) => state.login);
    const logout = useAuthStore((state) => state.logout);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let active = true;

        async function hydrateSession() {
            try {
                const res = await fetch('/api/auth/refresh', {
                    method: 'POST',
                    cache: 'no-store',
                });

                if (!res.ok) {
                    if (active) logout();
                    return;
                }

                const data: { accessToken?: string } = await res.json();
                if (active && data.accessToken) {
                    login(data.accessToken);
                } else if (active) {
                    logout();
                }
            } catch {
                if (active) logout();
            } finally {
                if (active) setIsReady(true);
            }
        }

        hydrateSession();
        return () => {
            active = false;
        };
    }, [login, logout]);

    if (!isReady) {
        return <div>Loading session...</div>;
    }

    return <>{children}</>;
}