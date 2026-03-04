"use client";

import { useCallback, useRef, useState, ButtonHTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  rippleColor?: string;
}

function RippleButton({
  children,
  className = "",
  rippleColor = "black",
  ...props
}: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripple, setRipple] = useState<{
    x: number;
    y: number;
    size: number;
    key: number;
    isLeaving?: boolean;
  } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const createRipple = useCallback(
    (event: React.MouseEvent) => {
      if (isHovered || !buttonRef.current) return;
      setIsHovered(true);

      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setRipple({ x, y, size, key: Date.now() });
    },
    [isHovered],
  );

  const removeRipple = useCallback((event: React.MouseEvent) => {
    if (event.target !== event.currentTarget) return;
    setIsHovered(false);

    if (!buttonRef.current) return;
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipple({ x, y, size, key: Date.now(), isLeaving: true });
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (!buttonRef.current || !isHovered || !ripple) return;

      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setRipple((prev) => (prev ? { ...prev, x, y } : null));
    },
    [isHovered, ripple],
  );

  return (
    <button
      ref={buttonRef}
      className={`relative flex items-center justify-center overflow-hidden transition-colors duration-600 ${className}`}
      onMouseEnter={(e) => {
        if (e.target === e.currentTarget) {
          createRipple(e);
        }
      }}
      onMouseLeave={(e) => {
        if (e.target === e.currentTarget) {
          removeRipple(e);
        }
      }}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <span className="relative z-2">{children}</span>

      <AnimatePresence>
        {ripple && (
          <motion.span
            key={ripple.key}
            className="absolute rounded-full pointer-events-none z-1"
            style={{
              width: ripple.size,
              height: ripple.size,
              left: ripple.x,
              top: ripple.y,
              x: "-50%",
              y: "-50%",
              backgroundColor: rippleColor,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: ripple.isLeaving ? 0 : 1,
              x: "-50%",
              y: "-50%",
              opacity: ripple.isLeaving ? 0 : 1,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              if (ripple.isLeaving) {
                setRipple(null);
              }
            }}
          />
        )}
      </AnimatePresence>
    </button>
  );
}

export default RippleButton;
