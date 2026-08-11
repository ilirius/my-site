"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // В production — отправка в аналитику (Vercel Analytics, Google Analytics, etc.)
    // В development — вывод в консоль
    if (process.env.NODE_ENV === "development") {
      console.log("[Web Vitals]", metric.name, metric.value, metric);
      return;
    }

    const body = {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
      delta: metric.delta,
      navigationType: (metric as { navigationType?: string }).navigationType,
    };

    // Будущая точка интеграции с аналитикой
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/vitals", JSON.stringify(body));
    }
  });

  return null;
}
