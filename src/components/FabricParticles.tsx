"use client";

import { useEffect, useRef } from "react";

type ParticleType = "circle" | "diamond" | "blob";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  type: ParticleType;
  color: string;
}

const COLORS = [
  "27, 42, 74",    // navy
  "201, 168, 76",  // champagne
  "158, 123, 95",  // mocha
  "196, 168, 130", // mocha-light
];

export default function FabricParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 18 : 42;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    particlesRef.current = Array.from({ length: count }, () => {
      const roll = Math.random();
      // 70% circles (navy), 15% diamonds (champagne), 15% blobs (mocha)
      const type: ParticleType = roll < 0.7 ? "circle" : roll < 0.85 ? "diamond" : "blob";
      const colorIdx = type === "circle" ? 0 : type === "diamond" ? 1 : (Math.random() < 0.5 ? 2 : 3);
      // Larger size range than before
      const size = type === "blob" ? 6 + Math.random() * 8 : type === "diamond" ? 3 + Math.random() * 5 : 1.5 + Math.random() * 4;
      return {
        x: Math.random() * (canvas?.width ?? 1200),
        y: Math.random() * (canvas?.height ?? 800),
        size,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        opacity: 0.05 + Math.random() * 0.13,
        type,
        color: COLORS[colorIdx],
      };
    });

    const drawDiamond = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.lineTo(x + size, y);
      ctx.lineTo(x, y + size);
      ctx.lineTo(x - size, y);
      ctx.closePath();
    };

    const drawBlob = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.ellipse(x, y, size, size * 0.7, Math.PI / 4, 0, Math.PI * 2);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particlesRef.current) {
        const dx = (mx - canvas.width / 2) / canvas.width;
        const dy = (my - canvas.height / 2) / canvas.height;
        const parallaxX = dx * 5;
        const parallaxY = dy * 5;

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const px = p.x + parallaxX;
        const py = p.y + parallaxY;

        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;

        if (p.type === "circle") {
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "diamond") {
          drawDiamond(ctx, px, py, p.size);
          ctx.fill();
        } else {
          drawBlob(ctx, px, py, p.size);
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      aria-hidden="true"
    />
  );
}
