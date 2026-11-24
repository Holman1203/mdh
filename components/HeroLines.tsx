/**
 * Calm ambient motion for the hero: thin orange lines that glide slowly across the picture,
 * plus a faint network of dots and connecting lines drifting gently. Purely decorative
 * (no pointer interaction), and switched off for visitors who prefer reduced motion.
 */
const nodes: [number, number][] = [
  [58, 18], [66, 34], [76, 22], [84, 40], [92, 26], [70, 58], [80, 70], [90, 62], [62, 78], [96, 84],
];
const links: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7], [3, 7], [5, 8], [7, 9],
];

export default function HeroLines() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* thin orange lines gliding slowly */}
      <span className="animate-scan-y absolute left-[74%] top-0 h-1/2 w-px bg-gradient-to-b from-transparent via-accent to-transparent opacity-0" />
      <span className="animate-scan-y-slow absolute left-[88%] top-0 h-2/5 w-px bg-gradient-to-b from-transparent via-accent/80 to-transparent opacity-0 [animation-delay:-9s]" />
      <span className="animate-scan-y absolute left-[96%] top-0 h-1/3 w-px bg-gradient-to-b from-transparent via-accent/60 to-transparent opacity-0 [animation-delay:-5s]" />
      <span className="animate-scan-x absolute left-0 top-[80%] h-px w-1/3 bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 [animation-delay:-6s]" />

      {/* faint network of dots (lines and dots drift together) */}
      <div className="animate-net-drift absolute inset-0">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {links.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke="rgb(255 122 0)"
            strokeOpacity="0.28"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      {nodes.map(([x, y], i) => (
        <span
          key={i}
          className="animate-twinkle absolute h-1.5 w-1.5 rounded-full bg-accent"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${(i % 5) * -1.1}s` }}
        />
      ))}
      </div>
    </div>
  );
}
