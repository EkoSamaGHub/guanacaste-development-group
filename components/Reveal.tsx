"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

// Gentle scroll-reveal fade/rise. Progressive enhancement: content is fully
// visible without JS (the .reveal hidden state only applies with motion
// allowed, and we reveal on mount as a fallback). Motion serves the content.
//
// `priority` renders the element already-visible from SSR — use it for the
// above-the-fold hero so the LCP text paints on first frame instead of waiting
// for JS to hydrate and the observer to fire (that gate was tanking LCP).
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  priority = false,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(priority);

  useEffect(() => {
    if (priority) return;
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [priority]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
