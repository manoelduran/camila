// lib/gtag.ts
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_location: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos para a landing page médica
export const trackAppointmentClick = (location?: string) => {
  event({
    action: "click",
    category: "appointment",
    label: location || "appointment_button",
  });
};

export const trackContactClick = (method: string) => {
  event({
    action: "contact",
    category: "engagement",
    label: method, // 'whatsapp', 'phone', 'email'
  });
};

export const trackSectionView = (section: string) => {
  event({
    action: "view_section",
    category: "engagement",
    label: section, // 'services', 'about', 'locations', etc.
  });
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
