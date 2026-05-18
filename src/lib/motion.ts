import { Variants } from "framer-motion";

// Core Timing Tokens
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATIONS = {
  sm: 0.45,
  md: 0.6,
  lg: 0.8,
  instant: 0.2, // For reduced motion
};

export const STAGGERS = {
  sm: 0.08,
  md: 0.12,
  lg: 0.16,
};

// Common Configuration Values
export const MAX_TRANSLATE = 24;
export const MAX_SCALE = 1.02;

/**
 * Helper to generate robust variants that respect prefers-reduced-motion.
 * We pass `shouldReduceMotion` dynamically to ensure accessibility.
 */
export const getRevealUp = (shouldReduceMotion: boolean): Variants => ({
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : MAX_TRANSLATE },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? DURATIONS.instant : DURATIONS.md,
      ease: EASE_OUT,
    },
  },
});

export const getRevealDown = (shouldReduceMotion: boolean): Variants => ({
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? DURATIONS.instant : DURATIONS.md,
      ease: EASE_OUT,
    },
  },
});

export const getFadeIn = (shouldReduceMotion: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? DURATIONS.instant : DURATIONS.md,
      ease: EASE_OUT,
    },
  },
});

export const getScaleIn = (shouldReduceMotion: boolean): Variants => ({
  hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: shouldReduceMotion ? DURATIONS.instant : DURATIONS.md,
      ease: EASE_OUT,
    },
  },
});

export const getStaggerContainer = (shouldReduceMotion: boolean, staggerSize: keyof typeof STAGGERS = "md"): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : STAGGERS[staggerSize],
    },
  },
});

export const getHoverCard = (shouldReduceMotion: boolean) => ({
  y: shouldReduceMotion ? 0 : -4,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02)",
  transition: { duration: 0.3, ease: EASE_OUT },
});

export const getTapPress = (shouldReduceMotion: boolean) => ({
  scale: shouldReduceMotion ? 1 : 0.98,
  transition: { duration: 0.1 },
});

export const getDrawLine = (shouldReduceMotion: boolean): Variants => ({
  hidden: { pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? DURATIONS.instant : DURATIONS.lg,
      ease: EASE_OUT,
    },
  },
});
