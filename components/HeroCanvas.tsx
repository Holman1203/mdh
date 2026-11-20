"use client";

import { useEffect, useRef } from "react";

/**
 * Live hero background: a drifting network of glowing nodes (a "digital hub" of connected people and ideas).
 * - Nodes drift and connect when close; some are orange and pulse; the pointer pulls nearby nodes into the network.
 * - Lightweight: plain canvas, no libraries. Pauses when off-screen or the tab is hidden.
 * - Reduced motion: draws a single still frame instead of animating.
 */
type Node = { x: number; y: number; vx: number; vy: number; r: number; hot: boolean; phase: number };

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    const build = () => {
      const r = parent.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.floor((w * h) / 15000), w < 640 ? 36 : 90);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: 1.2 + Math.random() * 1.8,
        hot: Math.random() < 0.16,
        phase: Math.random(),
      }));
    };

    const frame = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const maxD = w < 640 ? 95 : 135;

      for (const n of nodes) {
        // pointer gently pulls nodes toward it
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 180 * 180 && d2 > 1) {
          n.vx += (dx / Math.sqrt(d2)) * 0.012;
          n.vy += (dy / Math.sqrt(d2)) * 0.012;
        }
        n.vx *= 0.995;
        n.vy *= 0.995;
        const sp = Math.hypot(n.vx, n.vy);
        if (sp > 0.9) {
          n.vx *= 0.9 / sp;
          n.vy *= 0.9 / sp;
        }
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
        }
        if (n.x < -10) n.x = w + 10;
        if (n.x > w + 10) n.x = -10;
        if (n.y < -10) n.y = h + 10;
        if (n.y > h + 10) n.y = -10;
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < maxD) {
            const alpha = (1 - d / maxD) * 0.4;
            ctx.strokeStyle = a.hot || b.hot ? `rgba(255,122,0,${alpha * 1.1})` : `rgba(255,255,255,${alpha * 0.8})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // pointer links
        const n = nodes[i];
        const dm = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        if (dm < 170) {
          ctx.strokeStyle = `rgba(255,122,0,${(1 - dm / 170) * 0.8})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // nodes + pulses
      for (const n of nodes) {
        if (n.hot) {
          const p = reduce ? 0.5 : ((t / 2600 + n.phase) % 1);
          ctx.strokeStyle = `rgba(255,122,0,${(1 - p) * 0.5})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 4 + p * 22, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = "rgba(255,122,0,0.95)";
        } else {
          ctx.fillStyle = "rgba(255,255,255,0.85)";
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.hot ? n.r + 0.8 : n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce && visible) raf = requestAnimationFrame(frame);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(frame);
    };

    build();
    start();

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    const ro = new ResizeObserver(() => {
      build();
      if (reduce) requestAnimationFrame(frame);
    });
    ro.observe(parent);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !reduce) start();
    });
    io.observe(canvas);
    const onVis = () => {
      visible = !document.hidden;
      if (visible && !reduce) start();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
