'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return (
    <>
      <BalancerProvider>
        <ReactLenis root>{children}</ReactLenis>
      </BalancerProvider>
    </>
  );
}
