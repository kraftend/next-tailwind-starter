import { useMemo } from 'react';
import { createBreakpoint } from 'react-use';
import resolve from 'tailwindcss/resolveConfig';

import tailwindConfig from '@_/tailwind.config';

const config = resolve(tailwindConfig);

const screens = Object.entries({
  base: '0px',
  ...config.theme?.screens,
})
  .map(([key, val]) => [key, parseInt(String(val).replace('px', ''))])
  .sort((a, b) => (a[1] as number) - (b[1] as number));

export const useBreakpointValue = createBreakpoint(
  Object.fromEntries(screens) as Record<string, number>,
);

export const useBreakpoint = (target: string) => {
  const current = useBreakpointValue();
  const currentIndex = useMemo(() => screens.findIndex(([k]) => k === current), [current]);
  const targetIndex = useMemo(() => screens.findIndex(([k]) => k === target), [target]);
  return currentIndex >= targetIndex;
};
