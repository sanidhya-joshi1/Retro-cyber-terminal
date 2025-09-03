import { useEffect, useRef } from "react";

export default function Matrix() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });

    let w, h, columnCount, columns;
    const charSet = "01░▒▓█<>|/\\{}[]()*#@≡+-";
    const fontSize = 16;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      columnCount = Math.floor(w / fontSize);
      columns = new Array(columnCount).fill(0);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      // Fade the canvas slightly to create trails
      ctx.fillStyle = "rgba(0,0,0,0.10)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;
      for (let i = 0; i < columnCount; i++) {
        const char = charSet[Math.floor(Math.random() * charSet.length)];
        const x = i * fontSize;
        const y = columns[i] * fontSize;

        ctx.fillStyle = "rgba(57,255,20,0.85)";
        ctx.fillText(char, x, y);

        if (y > h && Math.random() > 0.975) columns[i] = 0;
        else columns[i]++;
      }
      rafRef.current = requestAnimationFrame(draw);
    }
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
