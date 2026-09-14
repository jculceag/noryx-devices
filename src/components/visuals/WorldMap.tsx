"use client";

import { useId } from "react";

type WorldMapProps = {
  labels: readonly { code: string; role: string }[];
  ariaLabel: string;
};

/** Hand-crafted abstract dotted world map with USA→Dubai→Paraguay→Brazil path. */
export function WorldMap({ labels, ariaLabel }: WorldMapProps) {
  const uid = useId().replace(/:/g, "");
  const patternId = `noryx-dots-${uid}`;

  const nodes = [
    { code: "USA", x: 220, y: 210 },
    { code: "DUBAI", x: 620, y: 230 },
    { code: "PARAGUAY", x: 340, y: 380 },
    { code: "BRAZIL", x: 390, y: 350 },
  ];

  const path = `M ${nodes[0].x} ${nodes[0].y} C 360 120, 520 140, ${nodes[1].x} ${nodes[1].y} S 460 320, ${nodes[2].x} ${nodes[2].y} S 370 360, ${nodes[3].x} ${nodes[3].y}`;

  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox="0 0 1000 500"
        className="h-auto w-full text-titanium"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <pattern
            id={patternId}
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.18" />
          </pattern>
        </defs>

        <ellipse cx="230" cy="200" rx="120" ry="90" fill={`url(#${patternId})`} />
        <ellipse cx="180" cy="320" rx="70" ry="100" fill={`url(#${patternId})`} />
        <ellipse cx="520" cy="180" rx="160" ry="100" fill={`url(#${patternId})`} />
        <ellipse cx="700" cy="260" rx="90" ry="70" fill={`url(#${patternId})`} />
        <ellipse cx="820" cy="320" rx="80" ry="55" fill={`url(#${patternId})`} />
        <ellipse cx="360" cy="360" rx="90" ry="70" fill={`url(#${patternId})`} />

        <path
          d={path}
          fill="none"
          stroke="#D9C9A7"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.7"
        />

        {nodes.map((node) => {
          const label = labels.find((l) => l.code === node.code);
          return (
            <g key={node.code}>
              <circle
                cx={node.x}
                cy={node.y}
                r="5"
                fill="#080808"
                stroke="#D9C9A7"
                strokeWidth="1.25"
              />
              <circle cx={node.x} cy={node.y} r="1.5" fill="#D9C9A7" />
              <text
                x={node.x}
                y={node.y - 16}
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="11"
                letterSpacing="0.18em"
                fontFamily="system-ui, sans-serif"
              >
                {node.code}
              </text>
              {label ? (
                <text
                  x={node.x}
                  y={node.y + 22}
                  textAnchor="middle"
                  fill="#8C8C8C"
                  fontSize="9"
                  letterSpacing="0.12em"
                  fontFamily="system-ui, sans-serif"
                >
                  {label.role}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
