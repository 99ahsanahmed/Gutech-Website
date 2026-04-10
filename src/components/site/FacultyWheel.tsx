'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef } from 'react';

import type { FacultyMember } from '@/lib/site-data';

type FacultyWheelProps = {
  members: FacultyMember[];
};

export default function FacultyWheel({ members }: FacultyWheelProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const targetAngleRef = useRef(0);
  const smoothAngleRef = useRef(0);
  const isHoveringRef = useRef(false);
  const touchStateRef = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    axisLocked: '' as '' | 'x' | 'y',
  });

  const safeMembers = useMemo(
    () => members.filter((member) => member.name && member.role).slice(0, 8),
    [members],
  );

  function rotateBy(step: number) {
    targetAngleRef.current += step;
  }

  useEffect(() => {
    let raf = 0;

    const animate = () => {
      const target = targetAngleRef.current;
      const current = smoothAngleRef.current;
      const next = current + (target - current) * 0.12;
      smoothAngleRef.current = next;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateZ(-360px) rotateY(${next}deg)`;
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const handlePointerEnter = () => {
      isHoveringRef.current = true;
    };

    const handlePointerLeave = () => {
      isHoveringRef.current = false;
    };

    const handleWindowWheel = (event: WheelEvent) => {
      if (!isHoveringRef.current) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const direction = event.deltaY > 0 ? 1 : -1;
      rotateBy(direction * 13);
    };

    viewport.addEventListener('mouseenter', handlePointerEnter);
    viewport.addEventListener('mouseleave', handlePointerLeave);
    viewport.addEventListener('focusin', handlePointerEnter);
    viewport.addEventListener('focusout', handlePointerLeave);
    window.addEventListener('wheel', handleWindowWheel, { passive: false, capture: true });

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) {
        return;
      }

      touchStateRef.current.startX = touch.clientX;
      touchStateRef.current.startY = touch.clientY;
      touchStateRef.current.lastX = touch.clientX;
      touchStateRef.current.axisLocked = '';
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) {
        return;
      }

      const state = touchStateRef.current;
      const deltaXFromStart = touch.clientX - state.startX;
      const deltaYFromStart = touch.clientY - state.startY;

      if (!state.axisLocked) {
        if (Math.abs(deltaXFromStart) > 8 || Math.abs(deltaYFromStart) > 8) {
          state.axisLocked = Math.abs(deltaXFromStart) > Math.abs(deltaYFromStart) ? 'x' : 'y';
        }
      }

      if (state.axisLocked === 'x') {
        event.preventDefault();
        event.stopPropagation();
        const step = touch.clientX - state.lastX;
        rotateBy(step * 0.32);
      }

      state.lastX = touch.clientX;
    };

    viewport.addEventListener('touchstart', handleTouchStart, { passive: true });
    viewport.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      viewport.removeEventListener('mouseenter', handlePointerEnter);
      viewport.removeEventListener('mouseleave', handlePointerLeave);
      viewport.removeEventListener('focusin', handlePointerEnter);
      viewport.removeEventListener('focusout', handlePointerLeave);
      viewport.removeEventListener('touchstart', handleTouchStart);
      viewport.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('wheel', handleWindowWheel, { capture: true });
    };
  }, []);

  if (!safeMembers.length) {
    return null;
  }

  return (
    <section className="faculty-wheel">
      <div className="faculty-wheel__viewport" ref={viewportRef}>
        <div className="faculty-wheel__track" ref={trackRef}>
          {safeMembers.map((member, index) => {
            const rotation = (360 / safeMembers.length) * index;
            const photo = member.imageSrc;

            return (
              <article
                key={member.name}
                className="faculty-wheel__card"
                style={{ transform: `rotateY(${rotation}deg) translateZ(360px)` }}
              >
                <div className="faculty-wheel__photo">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={member.name}
                      fill
                      sizes="220px"
                      className="faculty-wheel__photo-img"
                      style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                    />
                  ) : (
                    <div className="faculty-wheel__photo-fallback">Faculty</div>
                  )}
                </div>
                <div className="faculty-wheel__meta">
                  <span>{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.expertise}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="faculty-wheel__controls">
        <button type="button" onClick={() => rotateBy(-18)}>
          Prev
        </button>
        <button type="button" onClick={() => rotateBy(18)}>
          Next
        </button>
      </div>
    </section>
  );
}
