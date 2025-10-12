'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Industry-standard high-performance IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        // Use requestAnimationFrame for 120+ FPS smooth animations
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        });
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all animatable elements
    const animatedElements = document.querySelectorAll(
      '.smooth-appear, .smooth-scale, [class*="animate-"], .crystal-card, .magic-card'
    );
    
    animatedElements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.transform = 'translate3d(0, 0, 0)'; // GPU acceleration
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}