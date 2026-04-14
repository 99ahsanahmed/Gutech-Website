'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import type { NewsItem } from '@/lib/site-data';

type NewsReelMobileProps = {
  items: NewsItem[];
};

const SWIPE_THRESHOLD = 46;

export default function NewsReelMobile({ items }: NewsReelMobileProps) {
  const total = items.length;
  const slides = useMemo(() => {
    if (items.length <= 1) {
      return items;
    }

    return [items[items.length - 1], ...items, items[0]];
  }, [items]);

  const [activeIndex, setActiveIndex] = useState(total > 1 ? 1 : 0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchDeltaX, setTouchDeltaX] = useState(0);

  const logicalIndex = total > 1 ? (activeIndex - 1 + total) % total : 0;

  const goNext = () => {
    if (total <= 1) {
      return;
    }

    setIsAnimating(true);
    setActiveIndex((current) => current + 1);
  };

  const goPrev = () => {
    if (total <= 1) {
      return;
    }

    setIsAnimating(true);
    setActiveIndex((current) => current - 1);
  };

  const handleTransitionEnd = () => {
    if (total <= 1) {
      return;
    }

    if (activeIndex === 0) {
      setIsAnimating(false);
      setActiveIndex(total);
      return;
    }

    if (activeIndex === total + 1) {
      setIsAnimating(false);
      setActiveIndex(1);
      return;
    }
  };

  const handleTrackUpdated = () => {
    if (!isAnimating) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
    }
  };

  const [isPointerDown, setIsPointerDown] = useState(false);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsPointerDown(true);
    setTouchStartX(event.clientX);
    setTouchDeltaX(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown) return;
    setTouchDeltaX(event.clientX - touchStartX);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown) return;
    setIsPointerDown(false);
    event.currentTarget.releasePointerCapture(event.pointerId);

    if (touchDeltaX <= -SWIPE_THRESHOLD) {
      goNext();
    } else if (touchDeltaX >= SWIPE_THRESHOLD) {
      goPrev();
    }

    setTouchDeltaX(0);
  };

  return (
    <section className="news-carousel" aria-label="News highlights carousel">
      <div
        className="news-carousel__viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{ touchAction: 'pan-y', cursor: isPointerDown ? 'grabbing' : 'grab' }}
      >
        <div
          className={`news-carousel__track ${isAnimating ? 'is-animating' : ''}`}
          onTransitionEnd={handleTransitionEnd}
          onTransitionCancel={handleTrackUpdated}
          style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
        >
          {slides.map((item, index) => (
            <article className="news-carousel__slide" key={`${item.title}-${index}`}>
              {item.imageSrc ? (
                <Image
                  className="news-carousel__image"
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.title}
                  fill
                  sizes="100vw"
                  unoptimized
                  priority={index === 1}
                />
              ) : null}
              <div className="news-carousel__scrim" />
              <div className="news-carousel__content">
                <span className="news-carousel__kicker">{item.category}</span>
                <h3>{item.title}</h3>
                <p className="news-carousel__subtitle">{item.subtitle}</p>
                <p>{item.details}</p>
                <p>{item.impact}</p>
                <div className="news-carousel__meta">
                  <span>{item.dateLabel}</span>
                  <span>{item.channel}</span>
                </div>
                <Link className="button button--light news-carousel__link" href={item.href ?? '/news'}>
                  Open news page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="news-carousel__dots" aria-label="News slide navigation">
        {items.map((item, dotIndex) => (
          <button
            type="button"
            key={`${item.title}-dot`}
            className={`news-carousel__dot ${logicalIndex === dotIndex ? 'is-active' : ''}`}
            aria-label={`Go to news slide ${dotIndex + 1}`}
            onClick={() => {
              setIsAnimating(true);
              setActiveIndex(dotIndex + 1);
            }}
          />
        ))}
      </div>
    </section>
  );
}
