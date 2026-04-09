'use client';

import Image from 'next/image';
import { startTransition, useEffect, useRef, useState } from 'react';

import type { NewsItem } from '@/lib/site-data';

type NewsReelMobileProps = {
  items: NewsItem[];
};

const SWIPE_THRESHOLD = 42;
const WHEEL_THRESHOLD = 22;
const TRANSITION_MS = 520;

export default function NewsReelMobile({ items }: NewsReelMobileProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);
  const animationTimerRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchLastXRef = useRef(0);
  const touchLastYRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || typeof window === 'undefined' || items.length < 2) {
      return;
    }

    const lastIndex = items.length - 1;
    const mobileQuery = window.matchMedia('(max-width: 960px)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const goTo = (nextIndex: number) => {
      if (reducedMotionQuery.matches || isAnimatingRef.current) {
        return false;
      }

      const boundedIndex = Math.max(0, Math.min(lastIndex, nextIndex));
      if (boundedIndex === activeIndexRef.current) {
        return false;
      }

      if (animationTimerRef.current) {
        window.clearTimeout(animationTimerRef.current);
      }

      isAnimatingRef.current = true;
      activeIndexRef.current = boundedIndex;
      startTransition(() => {
        setActiveIndex(boundedIndex);
      });

      animationTimerRef.current = window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, TRANSITION_MS);

      return true;
    };

    const onWheel = (event: WheelEvent) => {
      if (!mobileQuery.matches || reducedMotionQuery.matches || isAnimatingRef.current) {
        return;
      }

      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) {
        return;
      }

      const currentIndex = activeIndexRef.current;
      const goingDown = event.deltaY > 0;
      const goingUp = event.deltaY < 0;

      if (goingDown && currentIndex < lastIndex) {
        event.preventDefault();
        goTo(currentIndex + 1);
      } else if (goingUp && currentIndex > 0) {
        event.preventDefault();
        goTo(currentIndex - 1);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) {
        return;
      }

      touchStartXRef.current = touch.clientX;
      touchStartYRef.current = touch.clientY;
      touchLastXRef.current = touch.clientX;
      touchLastYRef.current = touch.clientY;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!mobileQuery.matches || reducedMotionQuery.matches) {
        return;
      }

      const touch = event.touches[0];
      if (!touch) {
        return;
      }

      const deltaX = touch.clientX - touchStartXRef.current;
      const deltaY = touch.clientY - touchStartYRef.current;
      const currentIndex = activeIndexRef.current;
      const isVerticalGesture = Math.abs(deltaY) > Math.abs(deltaX);
      const tryingNext = deltaY < 0 && currentIndex < lastIndex;
      const tryingPrev = deltaY > 0 && currentIndex > 0;

      if (isVerticalGesture && (tryingNext || tryingPrev)) {
        event.preventDefault();
      }

      touchLastXRef.current = touch.clientX;
      touchLastYRef.current = touch.clientY;
    };

    const onTouchEnd = () => {
      if (!mobileQuery.matches || reducedMotionQuery.matches || isAnimatingRef.current) {
        return;
      }

      const deltaX = touchLastXRef.current - touchStartXRef.current;
      const deltaY = touchLastYRef.current - touchStartYRef.current;
      const currentIndex = activeIndexRef.current;

      if (Math.abs(deltaY) <= Math.abs(deltaX) || Math.abs(deltaY) < SWIPE_THRESHOLD) {
        return;
      }

      if (deltaY <= -SWIPE_THRESHOLD && currentIndex < lastIndex) {
        goTo(currentIndex + 1);
      } else if (deltaY >= SWIPE_THRESHOLD && currentIndex > 0) {
        goTo(currentIndex - 1);
      }
    };

    viewport.addEventListener('wheel', onWheel, { passive: false });
    viewport.addEventListener('touchstart', onTouchStart, { passive: true });
    viewport.addEventListener('touchmove', onTouchMove, { passive: false });
    viewport.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      viewport.removeEventListener('wheel', onWheel);
      viewport.removeEventListener('touchstart', onTouchStart);
      viewport.removeEventListener('touchmove', onTouchMove);
      viewport.removeEventListener('touchend', onTouchEnd);

      if (animationTimerRef.current) {
        window.clearTimeout(animationTimerRef.current);
      }
    };
  }, [items.length]);

  return (
    <section className="news-reel-mobile" aria-label="Mobile news story sequence">
      <div className="news-reel-mobile__viewport" ref={viewportRef}>
        <div
          className="news-reel-mobile__track"
          style={{ transform: `translate3d(0, -${activeIndex * 100}svh, 0)` }}
        >
          {items.map((item, index) => (
            <article key={item.title} className="news-reel-mobile__panel">
              {item.imageSrc ? (
                <Image
                  className="news-reel-mobile__image"
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.title}
                  fill
                  sizes="100vw"
                  unoptimized
                  priority={index === 0}
                />
              ) : null}
              <div className="news-reel-mobile__scrim" />
              <div className="news-reel-mobile__content">
                <span className="news-reel-mobile__kicker">{item.category}</span>
                <h3>{item.title}</h3>
                <p className="news-reel-mobile__subtitle">{item.subtitle}</p>
                <p>{item.details}</p>
                <p>{item.impact}</p>
                <div className="news-reel-mobile__meta">
                  <span>{item.dateLabel}</span>
                  <span>{item.channel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
