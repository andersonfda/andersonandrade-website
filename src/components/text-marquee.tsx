"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";
import { wrap } from "@motionone/utils";

interface TextMarqueeProps {
  children: string;
  baseVelocity?: number;
  className?: string;
}

export function TextMarquee({
  children,
  baseVelocity = -2,
  className = "",
}: TextMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex whitespace-nowrap gap-8 flex-nowrap" style={{ x }}>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`block text-[clamp(40px,6vw,80px)] ${className}`}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
