'use client';

import { useMemo, useState } from 'react';

type TiltState = {
  x: number;
  y: number;
};
type CardKey = 'main' | 'mid' | 'back';

export default function HeroStack() {
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });
  const [active, setActive] = useState<CardKey>('mid');

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 16;
    const rotateX = (0.5 - py) * 12;
    setTilt({ x: rotateX, y: rotateY });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
  }

  const styleMain = useMemo(() => {
    const isActive = active === 'main';
    return {
      transform: `rotateY(${tilt.y - 9}deg) rotateX(${tilt.x + 2}deg) translate3d(${isActive ? -8 : 0}px, ${isActive ? -10 : 0}px, 0) scale(${isActive ? 1.03 : 1})`,
      zIndex: isActive ? 8 : 3,
    };
  }, [active, tilt.x, tilt.y]);

  const styleMid = useMemo(() => {
    const isActive = active === 'mid';
    return {
      transform: `rotateY(${tilt.y * 0.75 + 10}deg) rotateX(${tilt.x * 0.7 - 2}deg) translate3d(${tilt.y * -0.4 + (isActive ? -10 : 0)}px, ${tilt.x * -0.35 + (isActive ? -10 : 0)}px, 0) scale(${isActive ? 1.03 : 1})`,
      zIndex: isActive ? 9 : 4,
    };
  }, [active, tilt.x, tilt.y]);

  const styleBack = useMemo(() => {
    const isActive = active === 'back';
    return {
      transform: `rotateY(${tilt.y * 0.55 + 14}deg) rotateX(${tilt.x * 0.55 + 1}deg) translate3d(${tilt.y * 0.25 + (isActive ? -10 : 0)}px, ${tilt.x * -0.2 + (isActive ? -10 : 0)}px, 0) scale(${isActive ? 1.03 : 1})`,
      zIndex: isActive ? 10 : 5,
    };
  }, [active, tilt.x, tilt.y]);

  return (
    <div className="hero-stack" onMouseLeave={handleLeave} onMouseMove={handleMove}>
      <article
        className={`hero-stack__card hero-stack__card--main${active === 'main' ? ' is-active' : ''}`}
        style={styleMain}
        onClick={() => setActive('main')}
      >
        <span className="hero-stack__eyebrow">Campus Focus</span>
        <h3>Practical learning environments</h3>
        <p>Designed for career readiness, innovation, and academic depth.</p>
      </article>
      <article
        className={`hero-stack__card hero-stack__card--mid${active === 'mid' ? ' is-active' : ''}`}
        style={styleMid}
        onClick={() => setActive('mid')}
      >
        <span className="hero-stack__eyebrow">Student Pathways</span>
        <h3>Programs with real progression</h3>
      </article>
      <article
        className={`hero-stack__card hero-stack__card--back${active === 'back' ? ' is-active' : ''}`}
        style={styleBack}
        onClick={() => setActive('back')}
      >
        <h3>Admissions always within reach</h3>
      </article>
    </div>
  );
}
