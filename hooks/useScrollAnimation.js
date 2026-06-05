'use client';

import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (animationClass = 'animate-slide-up', threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return [elementRef, isVisible ? animationClass : 'opacity-0'];
};

export default useScrollAnimation;
