/** Abstract developer panel icons — SVG only, no characters */

export function IconKeyboard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} fill="none" aria-hidden>
      <rect x="8" y="28" width="104" height="36" stroke="currentColor" strokeWidth="3" />
      <rect x="16" y="36" width="12" height="8" fill="currentColor" opacity="0.7" />
      <rect x="34" y="36" width="12" height="8" fill="currentColor" opacity="0.7" />
      <rect x="52" y="36" width="12" height="8" fill="currentColor" opacity="0.7" />
      <rect x="70" y="36" width="12" height="8" fill="currentColor" opacity="0.7" />
      <rect x="88" y="36" width="12" height="8" fill="currentColor" opacity="0.7" />
      <rect x="28" y="48" width="64" height="8" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

export function IconMonitor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} fill="none" aria-hidden>
      <rect x="14" y="8" width="92" height="58" stroke="currentColor" strokeWidth="3" />
      <rect x="22" y="16" width="76" height="42" fill="currentColor" opacity="0.12" />
      <path d="M48 66h24v8H48z" fill="currentColor" opacity="0.7" />
      <path d="M36 74h48v4H36z" fill="currentColor" opacity="0.5" />
      <circle cx="90" cy="20" r="2" fill="currentColor" className="text-accent" />
    </svg>
  );
}

export function IconCode({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} fill="none" aria-hidden>
      <path d="M36 20 L18 40 L36 60" stroke="currentColor" strokeWidth="3" />
      <path d="M84 20 L102 40 L84 60" stroke="currentColor" strokeWidth="3" />
      <path d="M66 16 L50 64" stroke="currentColor" strokeWidth="3" opacity="0.6" />
    </svg>
  );
}

export function IconCoffee({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 90" className={className} fill="none" aria-hidden>
      <path d="M28 28h36v36c0 8-8 14-18 14s-18-6-18-14V28z" stroke="currentColor" strokeWidth="3" />
      <path d="M64 36h10c6 0 10 5 10 12s-4 12-10 12H64" stroke="currentColor" strokeWidth="3" />
      <path d="M36 18c2-6 6-8 8-10M48 16c2-5 5-7 7-8" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M22 78h48" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function IconNotebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" className={className} fill="none" aria-hidden>
      <rect x="22" y="12" width="56" height="80" stroke="currentColor" strokeWidth="3" />
      <path d="M22 12h56v12H22z" fill="currentColor" opacity="0.25" />
      <path d="M34 40h32M34 52h28M34 64h32" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="28" cy="28" r="2" fill="currentColor" />
      <circle cx="28" cy="48" r="2" fill="currentColor" />
      <circle cx="28" cy="68" r="2" fill="currentColor" />
    </svg>
  );
}

export function IconMechKeyboard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 70" className={className} fill="none" aria-hidden>
      <rect x="6" y="18" width="118" height="40" stroke="currentColor" strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x={14 + i * 15}
          y="26"
          width="11"
          height="11"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          opacity={0.35}
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={`r2-${i}`}
          x={22 + i * 15}
          y="40"
          width="11"
          height="11"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          opacity={0.2}
        />
      ))}
    </svg>
  );
}
