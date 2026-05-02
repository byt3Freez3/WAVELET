import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.8 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" || 
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") || 
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
          backdropFilter: isHovered ? "blur(4px)" : "blur(0px)",
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
