"use client";

import { useState } from "react";

export default function InteractiveGrid() {
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  const cellSize = 40;
  const horizontal = 20;
  const vertical = 20;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden flex justify-center">
      <svg
        width={cellSize * horizontal}
        height={cellSize * vertical}
        className="mask-[radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]"
      >
        {Array.from({ length: horizontal * vertical }).map((_, index) => {
          const x = (index % horizontal) * cellSize;
          const y = Math.floor(index / horizontal) * cellSize;
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={cellSize}
              height={cellSize}
              className={`stroke-white/5 transition-colors duration-300 ${
                hoveredSquare === index ? "fill-(--accent)/20" : "fill-transparent"
              }`}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          );
        })}
      </svg>
    </div>
  );
}