import { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
  opacity?: number;
  color?: string;
  speed?: number;
}

export default function MatrixBackground({
  opacity = 0.04,
  color = 'rgba(37, 99, 235, 0.18)', // Tailwind blue-600 with opacity
  speed = 40,
}: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    } else {
      window.addEventListener('resize', resizeCanvas);
    }

    // Characters: Mix of numbers, latin, and terminal characters
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]&*%@#$';
    const charArray = chars.split('');

    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize) + 1;

    // Drop tracking: initialize at random negative offsets to stagger the starts
    let drops: number[] = Array(columns)
      .fill(0)
      .map(() => Math.floor(Math.random() * -100));

    const draw = () => {
      // Re-evaluate column count if width changed
      const currentColumns = Math.floor(canvas.width / fontSize) + 1;
      if (currentColumns !== drops.length) {
        const oldDrops = [...drops];
        drops = Array(currentColumns)
          .fill(0)
          .map((_, i) => oldDrops[i] !== undefined ? oldDrops[i] : Math.floor(Math.random() * -100));
      }

      // Slightly clear the canvas to create trails
      ctx.fillStyle = `rgba(10, 10, 12, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `normal ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Only draw if within bounds (above 0, drops start negative)
        if (drops[i] >= 0) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Highlight the lead character occasionally
          if (Math.random() > 0.98) {
            ctx.fillStyle = '#ffffff';
          } else {
            ctx.fillStyle = color;
          }

          ctx.fillText(text, x, y);
        }

        // Increment or reset drop
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    };

    let lastTime = 0;
    const loop = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;

      if (elapsed > speed) {
        draw();
        lastTime = timestamp;
      }
      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [opacity, color, speed]);

  return (
    <canvas
      id="matrix-rain-canvas"
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full block z-0"
    />
  );
}
