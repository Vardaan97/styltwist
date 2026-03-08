"use client";

/**
 * SVG Logo Variations for Styltwist
 * These can be used across the site. Each variant has a unique design personality.
 */

// Variation 1: Elegant Serif with Gold Accent Line
// Classic Playfair-style with a sweeping underline
export function LogoElegantSerif({ className = "", color = "#1B2A4A", accent = "#C9A84C" }: { className?: string; color?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Main text */}
      <text x="0" y="38" fontFamily="'Playfair Display', Georgia, serif" fontSize="36" fontWeight="600" fontStyle="italic" fill={color} letterSpacing="2">
        Styltwist
      </text>
      {/* Elegant underline sweep */}
      <path
        d="M0 50 C40 50, 60 44, 140 44 S240 50, 280 48"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Variation 2: Modern Monogram + Wordmark
// "ST" monogram icon paired with clean sans-serif wordmark
export function LogoMonogram({ className = "", color = "#1B2A4A", accent = "#C9A84C" }: { className?: string; color?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 320 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Monogram circle */}
      <circle cx="24" cy="24" r="22" stroke={accent} strokeWidth="1.5" fill="none" />
      {/* S and T intertwined */}
      <text x="12" y="32" fontFamily="'Playfair Display', Georgia, serif" fontSize="22" fontWeight="700" fontStyle="italic" fill={color}>
        St
      </text>
      {/* Wordmark */}
      <text x="58" y="32" fontFamily="'Inter', system-ui, sans-serif" fontSize="18" fontWeight="300" fill={color} letterSpacing="6">
        STYLTWIST
      </text>
    </svg>
  );
}

// Variation 3: Stacked Luxury
// Two-line stacked logo with a thin divider
export function LogoStacked({ className = "", color = "#1B2A4A", accent = "#C9A84C" }: { className?: string; color?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 180 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* STYL line */}
      <text x="90" y="22" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="16" fontWeight="200" fill={color} letterSpacing="10">
        STYL
      </text>
      {/* Thin divider line */}
      <line x1="50" y1="28" x2="130" y2="28" stroke={accent} strokeWidth="1" />
      {/* TWIST line */}
      <text x="90" y="46" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="16" fontWeight="200" fill={color} letterSpacing="10">
        TWIST
      </text>
    </svg>
  );
}

// Variation 4: Minimal Wordmark with Twisted S
// Clean sans-serif with a stylized "S" that has a twist/swirl
export function LogoTwistedS({ className = "", color = "#1B2A4A", accent = "#C9A84C" }: { className?: string; color?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 300 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Custom twisted S path */}
      <path
        d="M22 8 C28 8, 34 12, 34 18 C34 24, 22 24, 22 30 C22 36, 28 40, 34 40"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Small twist detail on S */}
      <circle cx="28" cy="24" r="2" fill={accent} opacity="0.6" />
      {/* Rest of wordmark */}
      <text x="48" y="34" fontFamily="'Inter', system-ui, sans-serif" fontSize="18" fontWeight="300" fill={color} letterSpacing="5">
        TYLTWIST
      </text>
    </svg>
  );
}

// Variation 5: Editorial Script
// Flowing script-style logo with dramatic flair
export function LogoScript({ className = "", color = "#1B2A4A", accent = "#C9A84C" }: { className?: string; color?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 300 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Script text */}
      <text x="10" y="44" fontFamily="'Playfair Display', Georgia, serif" fontSize="40" fontWeight="400" fontStyle="italic" fill={color} letterSpacing="1">
        Styltwist
      </text>
      {/* Decorative dot */}
      <circle cx="276" cy="42" r="3" fill={accent} />
      {/* Thin top line accent */}
      <line x1="10" y1="8" x2="60" y2="8" stroke={accent} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// Variation 6: Bold Fashion
// Thick weight, uppercase, fashion-magazine style
export function LogoBoldFashion({ className = "", color = "#1B2A4A", accent = "#C9A84C" }: { className?: string; color?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 340 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bold wordmark */}
      <text x="0" y="36" fontFamily="'Inter', system-ui, sans-serif" fontSize="32" fontWeight="800" fill={color} letterSpacing="4">
        STYLTWIST
      </text>
      {/* Thin gold underline */}
      <rect x="0" y="42" width="340" height="1" fill={accent} opacity="0.5" />
    </svg>
  );
}
