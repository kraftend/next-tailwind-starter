"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { Provider as BalancerProvider } from "react-wrap-balancer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <BalancerProvider>
      <ReactLenis root>{children}</ReactLenis>
    </BalancerProvider>
  );
}
