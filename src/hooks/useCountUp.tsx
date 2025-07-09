import * as React from 'react';
import { easeOutCubic } from '../utils/easing';
import type { CountUpProps } from '../components/CountUp';

export function useCountUp({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  easingFn,
  playOnView = false,
}: CountUpProps) {
  const [value, setValue] = React.useState(start);
  const [hasPlayed, setHasPlayed] = React.useState(!playOnView);
  const ref = React.useRef<HTMLSpanElement>(null);

  // Play on scroll/view logic
  React.useEffect(() => {
    if (!playOnView || hasPlayed) return;
    const el = ref.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasPlayed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [playOnView, hasPlayed]);

  // Animation logic
  React.useEffect(() => {
    if (!hasPlayed) return;
    let raf: number;
    let startTime: number | null = null;
    const timeout = window.setTimeout(() => {
      raf = requestAnimationFrame(animate);
    }, delay * 1000);
    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // seconds
      const t = Math.min(1, elapsed / duration);
      const eased = (easingFn || easeOutCubic)(t);
      setValue(start + (end - start) * eased);
      if (t < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [start, end, duration, delay, easingFn, hasPlayed]);

  return { value, ref };
}
