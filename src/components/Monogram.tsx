/**
 * The H7 monogram. Painted on walls, worn as a pin and scratched into snow,
 * it became the silent answer to the occupation between 1940 and 1945.
 */
export default function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Kong Haakon VIIs monogram, H7, under en krone"
      className={className}
    >
      <defs>
        <linearGradient id="monogram-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e6cd8b" />
          <stop offset="55%" stopColor="#c8a349" />
          <stop offset="100%" stopColor="#8f6f22" />
        </linearGradient>
      </defs>

      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="url(#monogram-gold)"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle
        cx="100"
        cy="100"
        r="84"
        fill="none"
        stroke="url(#monogram-gold)"
        strokeWidth="0.75"
        opacity="0.4"
      />

      {/* Crown */}
      <g fill="url(#monogram-gold)">
        <path d="M60 62 L70 34 L85 54 L100 26 L115 54 L130 34 L140 62 Z" />
        <rect x="58" y="66" width="84" height="8" rx="2" />
        <circle cx="70" cy="30" r="4.5" />
        <circle cx="100" cy="22" r="5.5" />
        <circle cx="130" cy="30" r="4.5" />
      </g>

      {/* H7 */}
      <text
        x="100"
        y="152"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="78"
        fill="url(#monogram-gold)"
      >
        H7
      </text>
    </svg>
  );
}
