import { useCallback } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  offset?: number;
  easing?: (t: number) => number;
}

// Easing function for smooth deceleration
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((
    elementId: string,
    options: SmoothScrollOptions = {}
  ) => {
    const {
      duration = 1200, // 1.2 seconds for smooth scroll
      offset = 0,
      easing = easeOutCubic
    } = options;

    const element = document.getElementById(elementId);
    if (!element) return;

    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + startPosition - offset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  return { scrollToElement };
};
