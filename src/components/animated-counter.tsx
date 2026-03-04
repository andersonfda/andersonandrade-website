"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring, useInView } from "motion/react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 100 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest).toString());
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
