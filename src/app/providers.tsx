'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis } from '@studio-freight/react-lenis';
import type { LenisInstance } from '@studio-freight/react-lenis';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

export function Providers({ children }: { children: ReactNode }) {
  const lenis = useRef<{ lenis: LenisInstance; wrapper: HTMLElement; content: HTMLElement }>();
  const pathname = usePathname();

  useEffect(() => {
    lenis.current?.lenis?.scrollTo(0, {
      immediate: true,
    });
  }, [pathname]);

  return (
    <>
      <BalancerProvider>
        <ReactLenis ref={lenis} root>
          <>{children}</>
        </ReactLenis>
      </BalancerProvider>
    </>
  );
}
