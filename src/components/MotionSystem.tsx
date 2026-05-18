import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  getStaggerContainer, 
  getRevealUp, 
  getRevealDown, 
  getFadeIn,
  getHoverCard,
  getTapPress,
  getScaleIn
} from '@/lib/motion';

/**
 * <RevealSection>
 * Scroll-triggered wrapper. Alternates direction if requested.
 */
export function RevealSection({ 
  children, 
  className = "", 
  direction = "up" 
}: { 
  children: React.ReactNode, 
  className?: string,
  direction?: "up" | "down" | "fade"
}) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  
  const variants = direction === "up" ? getRevealUp(shouldReduceMotion) : 
                   direction === "down" ? getRevealDown(shouldReduceMotion) : 
                   getFadeIn(shouldReduceMotion);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/**
 * <StaggerGrid>
 * Parent layout container utilizing staggered reveals.
 */
export function StaggerGrid({ 
  children, 
  className = "",
  staggerSize = "md"
}: { 
  children: React.ReactNode, 
  className?: string,
  staggerSize?: "sm" | "md" | "lg"
}) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={getStaggerContainer(shouldReduceMotion, staggerSize)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * <MotionCard>
 * Reusable card component supporting hoverCard and tapPress interactions.
 */
export function MotionCard({ 
  children, 
  className = "",
  as = "div",
  onClick
}: { 
  children: React.ReactNode, 
  className?: string,
  as?: any,
  onClick?: () => void
}) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const Component = motion(as);

  return (
    <Component
      variants={getScaleIn(shouldReduceMotion)}
      whileHover={getHoverCard(shouldReduceMotion)}
      whileTap={onClick ? getTapPress(shouldReduceMotion) : undefined}
      className={className}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}

/**
 * <KineticHeading>
 * Splits headings by word/line for staggered reveal (subtle, no gimmicks).
 */
export function KineticHeading({ 
  text, 
  className = "", 
  as = "h2" 
}: { 
  text: string | React.ReactNode, 
  className?: string,
  as?: any
}) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const Component = motion(as);

  // If text is a react node, just fade it safely.
  if (typeof text !== "string") {
    return (
      <Component 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={getRevealUp(shouldReduceMotion)}
        className={className}
      >
        {text}
      </Component>
    );
  }

  const words = text.split(" ");
  
  return (
    <Component 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={getStaggerContainer(shouldReduceMotion, "sm")}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span 
          key={i} 
          variants={getRevealUp(shouldReduceMotion)}
          className="inline-block mr-[0.25em] pb-1"
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}

/**
 * <MagneticCTA>
 * A lightweight wrapper for buttons that subtly translates toward the mouse cursor.
 * Disabled on touch/reduced motion.
 */
export function MagneticCTA({ 
  children, 
  className = "",
  disabled = false
}: { 
  children: React.ReactNode, 
  className?: string,
  disabled?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion() ?? false;

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || disabled) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
