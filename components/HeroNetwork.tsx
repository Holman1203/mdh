"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Pulse = { a: Node; b: Node; p: number; speed: number };

/**
 * Tech "wiring" for the hero: small orange nodes drift slowly across the whole hero and join to their near
 * neighbours with short thin lines, like a network or circuit. Little signals travel along the lines. When the
 * pointer is over the hero, nearby nodes link up to it. Everything moves gently; nothing jumps or shakes.
 * Purely decorative. Pauses when off screen or in a background tab; reduced-motion visitors get one still frame.
 */
export default function HeroNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ORANGE = "255,122,0";
    let w = 0;
    let h = 0;
    let link = 130; // maximum length of a line: kept short on purpose
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;
    let last = 0;
    let sinceSpawn = 0;
    let onScreen = true;
    const mouse = { x: 0, y: 0, on: false };

    const makeNode = (): Node => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 6 + Math.random() * 10; // pixels per second: slow
      return { x: Math.random() * w, y: Math.random() * h, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, r: 1.4 + Math.random() * 1.6 };
    };

    function resize() {
      const rect = parent!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      link = Math.max(80, Math.min(135, w / 7));
      const want = Math.round(Math.min(110, Math.max(30, (w * h) / 9000)));
      while (nodes.length < want) nodes.push(makeNode());
      if (nodes.length > want) nodes = nodes.slice(0, want);
      pulses = [];
      if (reduce) draw();
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      ctx!.lineWidth = 1;
      // lines between near neighbours
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < link) {
            ctx!.strokeStyle = `rgba(${ORANGE},${(1 - d / link) * 0.4})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      // links to the pointer
      if (mouse.on) {
        const reach = link * 1.5;
        for (const n of nodes) {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d < reach) {
            ctx!.strokeStyle = `rgba(${ORANGE},${(1 - d / reach) * 0.75})`;
            ctx!.beginPath();
            ctx!.moveTo(n.x, n.y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
        ctx!.fillStyle = `rgba(${ORANGE},0.9)`;
        ctx!.beginPath();
        ctx!.arc(mouse.x, mouse.y, 2.6, 0, Math.PI * 2);
        ctx!.fill();
      }
      // dots
      ctx!.fillStyle = `rgba(${ORANGE},0.85)`;
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      // signals travelling along the wires
      for (const s of pulses) {
        const x = s.a.x + (s.b.x - s.a.x) * s.p;
        const y = s.a.y + (s.b.y - s.a.y) * s.p;
        const g = ctx!.createRadialGradient(x, y, 0, x, y, 9);
        g.addColorStop(0, `rgba(255,190,120,0.95)`);
        g.addColorStop(1, `rgba(${ORANGE},0)`);
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(x, y, 9, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function spawnPulse() {
      if (!nodes.length || pulses.length > 7) return;
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const near = nodes.filter((n) => n !== a && Math.hypot(n.x - a.x, n.y - a.y) < link);
      if (!near.length) return;
      pulses.push({ a, b: near[Math.floor(Math.random() * near.length)], p: 0, speed: 0.5 + Math.random() * 0.4 });
    }

    function tick(t: number) {
      raf = requestAnimationFrame(tick);
      if (!onScreen || document.hidden) {
        last = t;
        return;
      }
      const dt = Math.min((t - last) / 1000 || 0, 0.05);
      last = t;
      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.min(Math.max(n.x, 0), w);
        n.y = Math.min(Math.max(n.y, 0), h);
      }
      sinceSpawn += dt;
      if (sinceSpawn > 0.9) {
        sinceSpawn = 0;
        spawnPulse();
      }
      pulses = pulses.filter((s) => {
        s.p += s.speed * dt;
        return s.p < 1 && Math.hypot(s.a.x - s.b.x, s.a.y - s.b.y) < link * 1.15;
      });
      draw();
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      mouse.on = x >= 0 && y >= 0 && x <= r.width && y <= r.height;
      mouse.x = x;
      mouse.y = y;
    };
    const onLeave = () => (mouse.on = false);
    const onUp = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") mouse.on = false; // touch: links fade once the finger lifts
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    const io = new IntersectionObserver(([e]) => (onScreen = e.isIntersecting), { threshold: 0 });
    io.observe(parent);

    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerup", onUp, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 -z-10 h-full w-full" aria-hidden="true" />;
}
