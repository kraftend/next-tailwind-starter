'use client';

import type { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <BalancerProvider>
        <ReactLenis root>{children}</ReactLenis>
      </BalancerProvider>
    </>
  );
}
