"use client";

import { useEffect } from "react";
import { event, trackSectionView } from "@/lib/gtag";

export const useGoogleAnalytics = () => {
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    event({ action, category, label, value });
  };

  const trackSection = (sectionName: string) => {
    trackSectionView(sectionName);
  };

  return { trackEvent, trackSection };
};

// Hook para rastrear visualização de seções quando entram na viewport
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  sectionName: string,
  options?: IntersectionObserverInit
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackSectionView(sectionName);
          observer.unobserve(element); // Rastreia apenas uma vez
        }
      },
      { threshold: 0.5, ...options }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, sectionName, options]);
};
