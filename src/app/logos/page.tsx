"use client";

import {
  LogoElegantSerif,
  LogoMonogram,
  LogoStacked,
  LogoTwistedS,
  LogoScript,
  LogoBoldFashion,
} from "@/components/logos/StyltwistLogos";

const logos = [
  {
    name: "Elegant Serif",
    description: "Classic Playfair italic with a sweeping champagne underline. Warm, luxurious, editorial.",
    Component: LogoElegantSerif,
  },
  {
    name: "Monogram + Wordmark",
    description: "\"St\" monogram in a circle paired with spaced sans-serif. Modern luxury branding.",
    Component: LogoMonogram,
  },
  {
    name: "Stacked",
    description: "STYL over TWIST with a gold divider. Compact, architectural, premium.",
    Component: LogoStacked,
  },
  {
    name: "Twisted S",
    description: "Custom stylized S with a twist detail, followed by clean sans-serif. Distinctive and memorable.",
    Component: LogoTwistedS,
  },
  {
    name: "Editorial Script",
    description: "Flowing Playfair script with a decorative dot. Fashion-forward and elegant.",
    Component: LogoScript,
  },
  {
    name: "Bold Fashion",
    description: "Heavy weight uppercase with thin gold underline. Magazine-cover impact.",
    Component: LogoBoldFashion,
  },
];

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display italic text-4xl md:text-5xl text-navy mb-4">
          Logo Variations
        </h1>
        <p className="text-navy/50 text-lg mb-16 max-w-2xl">
          Six logo concepts for Styltwist. Each designed to convey luxury wardrobe
          consulting while being distinctive and memorable.
        </p>

        <div className="space-y-16">
          {logos.map(({ name, description, Component }, i) => (
            <div key={name} className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-xs text-champagne tracking-widest">
                  0{i + 1}
                </span>
                <h2 className="font-mono text-sm tracking-widest uppercase text-navy">
                  {name}
                </h2>
              </div>

              {/* Light background preview */}
              <div className="bg-[#F0F3F9] rounded-card-lg p-12 flex items-center justify-center border border-[#E2E6EF] mb-4">
                <div style={{ width: "320px", height: "64px" }}>
                  <Component className="w-full h-full" />
                </div>
              </div>

              {/* Dark background preview */}
              <div className="bg-navy rounded-card-lg p-12 flex items-center justify-center mb-4">
                <div style={{ width: "320px", height: "64px" }}>
                  <Component className="w-full h-full" color="#FFFFFF" accent="#C9A84C" />
                </div>
              </div>

              {/* Small size preview (navbar size) */}
              <div className="bg-white border border-[#E2E6EF] rounded-card p-6 flex items-center gap-12">
                <div>
                  <span className="font-mono text-[10px] text-navy/30 tracking-widest uppercase block mb-2">
                    Navbar size
                  </span>
                  <div style={{ width: "160px", height: "32px" }}>
                    <Component className="w-full h-full" />
                  </div>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-navy/30 tracking-widest uppercase block mb-2">
                    Small
                  </span>
                  <div style={{ width: "120px", height: "24px" }}>
                    <Component className="w-full h-full" />
                  </div>
                </div>
              </div>

              <p className="text-navy/40 text-sm mt-4">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-[#E2E6EF]">
          <p className="font-mono text-xs text-navy/30 tracking-wider">
            All logos are SVG — infinitely scalable, lightweight, and editable.
          </p>
        </div>
      </div>
    </div>
  );
}
