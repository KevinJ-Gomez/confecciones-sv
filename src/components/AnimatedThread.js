"use client";

import { useEffect, useRef } from "react";

export default function AnimatedThread() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const updateThread = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);

      path.style.strokeDashoffset = length * (1 - progress);
    };

    updateThread();

    window.addEventListener("scroll", updateThread);
    window.addEventListener("resize", updateThread);

    return () => {
      window.removeEventListener("scroll", updateThread);
      window.removeEventListener("resize", updateThread);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      <svg
        className="absolute left-1/2 top-0 h-full w-[1400px] -translate-x-1/2 opacity-70"
        viewBox="0 0 1400 2200"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        <path
          d="M705 0 
          C650 170 820 250 710 410
          C590 580 430 480 420 690
          C410 890 760 820 760 1030
          C760 1235 520 1200 575 1430
          C625 1640 880 1540 870 1770
          C860 1980 690 2030 720 2200"
          stroke="#C8A45D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 18"
          opacity="0.22"
        />

        <path
          ref={pathRef}
          d="M705 0 
          C650 170 820 250 710 410
          C590 580 430 480 420 690
          C410 890 760 820 760 1030
          C760 1235 520 1200 575 1430
          C625 1640 880 1540 870 1770
          C860 1980 690 2030 720 2200"
          stroke="#F5E4C8"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}