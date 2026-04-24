import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {},
): [React.MutableRefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px" } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, disconnect — no re-hide on scroll out
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

// Hook for staggered children animations
export function useStaggeredScrollAnimation(
  count: number,
  options: UseScrollAnimationOptions = {},
): [React.MutableRefObject<HTMLDivElement | null>, boolean[], boolean] {
  const { threshold = 0.05, rootMargin = "0px 0px -50px 0px" } = options;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerVisible, setContainerVisible] = useState(false);
  const [childVisible, setChildVisible] = useState<boolean[]>(
    Array(count).fill(false),
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContainerVisible(true);
          // Stagger children reveals
          Array.from({ length: count }).forEach((_, i) => {
            setTimeout(() => {
              setChildVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [count, threshold, rootMargin]);

  return [containerRef, childVisible, containerVisible];
}
