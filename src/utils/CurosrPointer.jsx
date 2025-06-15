import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CurosrPointer = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth cursor movement
  const springConfig = { damping: 30, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Animated Cursor */}
      <motion.div
        className="fixed w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          //   scale: isHovering ? 2 : 1,
        }}
      />
    </>
  );
};

export default CurosrPointer;
