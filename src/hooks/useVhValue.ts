import { useEffect } from 'react';

export const useVhValue = () => {
  useEffect(() => {
    let prevHeight: number;
    const doc = document.documentElement;

    const handleResize = () => {
      const clientHeight = doc.clientHeight;
      if (clientHeight === prevHeight) return;
      requestAnimationFrame(function updateVH() {
        doc.style.setProperty('--vh', clientHeight * 0.01 + 'px');
        prevHeight = clientHeight;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};
