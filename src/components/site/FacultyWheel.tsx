'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

import type { FacultyMember } from '@/lib/site-data';

type FacultyWheelProps = {
  members: FacultyMember[];
  radiusDesktop?: number;
  radiusMobile?: number;
  className?: string;
  showSchool?: boolean;
};

type ActiveFacultyProfile = {
  member: FacultyMember;
  originX: number;
  originY: number;
  originScale: number;
};

const OVERLAY_EASE = [0.22, 1, 0.36, 1] as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function createMemberId(name: string) {
  return `faculty-card-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function createProfileOrigin(card: HTMLElement) {
  const rect = card.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const isMobile = viewportWidth <= 960;
  const panelWidth = Math.min(isMobile ? viewportWidth - 20 : viewportWidth - 72, 1160);
  const panelHeight = Math.min(viewportHeight - (isMobile ? 20 : 32), isMobile ? 860 : 880);

  return {
    originX: rect.left + rect.width / 2 - viewportWidth / 2,
    originY: rect.top + rect.height / 2 - viewportHeight / 2,
    originScale: clamp(Math.min(rect.width / panelWidth, rect.height / panelHeight), 0.18, 0.92),
  };
}

export default function FacultyWheel({
  members,
  radiusDesktop = 420,
  radiusMobile = 320,
  className,
  showSchool = false,
}: FacultyWheelProps) {
  const prefersReducedMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const targetAngleRef = useRef(0);
  const smoothAngleRef = useRef(0);
  const isHoveringRef = useRef(false);
  const radiusRef = useRef(radiusDesktop);
  const touchStateRef = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    axisLocked: '' as '' | 'x' | 'y',
  });
  const [radius, setRadius] = useState(radiusDesktop);
  const [activeProfile, setActiveProfile] = useState<ActiveFacultyProfile | null>(null);

  const safeMembers = useMemo(
    () => members.filter((member) => member.name && member.role),
    [members],
  );

  function rotateBy(step: number) {
    targetAngleRef.current += step;
  }

  function closeProfile() {
    setActiveProfile(null);
  }

  function openProfile(member: FacultyMember, card: HTMLElement) {
    if (typeof window === 'undefined') {
      return;
    }

    const origin = createProfileOrigin(card);
    setActiveProfile({
      member,
      ...origin,
    });
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia('(max-width: 960px)');

    const syncRadius = () => {
      const nextRadius = media.matches ? radiusMobile : radiusDesktop;
      radiusRef.current = nextRadius;
      setRadius(nextRadius);
    };

    syncRadius();
    media.addEventListener('change', syncRadius);

    return () => {
      media.removeEventListener('change', syncRadius);
    };
  }, [radiusDesktop, radiusMobile]);

  useEffect(() => {
    let raf = 0;

    const animate = () => {
      const target = targetAngleRef.current;
      const current = smoothAngleRef.current;
      const next = current + (target - current) * 0.12;
      smoothAngleRef.current = next;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateZ(-${radiusRef.current}px) rotateY(${next}deg)`;
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
      if (activeProfile || !isHoveringRef.current) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const direction = event.deltaY > 0 ? 1 : -1;
      rotateBy(direction * 13);
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch || activeProfile) {
        return;
      }

      touchStateRef.current.startX = touch.clientX;
      touchStateRef.current.startY = touch.clientY;
      touchStateRef.current.lastX = touch.clientX;
      touchStateRef.current.axisLocked = '';
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (activeProfile) {
        return;
      }

      const touch = event.touches[0];
      if (!touch) {
        return;
      }

      const state = touchStateRef.current;
      const deltaXFromStart = touch.clientX - state.startX;
      const deltaYFromStart = touch.clientY - state.startY;

      if (!state.axisLocked && (Math.abs(deltaXFromStart) > 8 || Math.abs(deltaYFromStart) > 8)) {
        state.axisLocked = Math.abs(deltaXFromStart) > Math.abs(deltaYFromStart) ? 'x' : 'y';
      }

      if (state.axisLocked === 'x') {
        event.preventDefault();
        event.stopPropagation();
        rotateBy((touch.clientX - state.lastX) * 0.32);
      }

      state.lastX = touch.clientX;
    };

    viewport.addEventListener('mouseenter', handlePointerEnter);
    viewport.addEventListener('mouseleave', handlePointerLeave);
    viewport.addEventListener('focusin', handlePointerEnter);
    viewport.addEventListener('focusout', handlePointerLeave);
    viewport.addEventListener('touchstart', handleTouchStart, { passive: true });
    viewport.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('wheel', handleWindowWheel, { passive: false, capture: true });

    return () => {
      viewport.removeEventListener('mouseenter', handlePointerEnter);
      viewport.removeEventListener('mouseleave', handlePointerLeave);
      viewport.removeEventListener('focusin', handlePointerEnter);
      viewport.removeEventListener('focusout', handlePointerLeave);
      viewport.removeEventListener('touchstart', handleTouchStart);
      viewport.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('wheel', handleWindowWheel, { capture: true });
    };
  }, [activeProfile]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    if (!activeProfile) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [activeProfile]);

  useEffect(() => {
    if (!activeProfile) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProfile();
      }
    };

    closeButtonRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProfile]);

  if (!safeMembers.length) {
    return null;
  }

  const activeMember = activeProfile?.member ?? null;
  const biography = activeMember?.biography?.length
    ? activeMember.biography
    : activeMember
      ? [activeMember.description]
      : [];
  const focusAreas = activeMember?.focusAreas?.length
    ? activeMember.focusAreas
    : activeMember
      ? [activeMember.expertise]
      : [];
  const profileHighlights = activeMember?.profileHighlights?.length
    ? activeMember.profileHighlights
    : activeMember
      ? [`Official role: ${activeMember.role}`, `Academic background: ${activeMember.school}`]
      : [];

  return (
    <section className={`faculty-wheel${className ? ` ${className}` : ''}`}>
      <div className="faculty-wheel__viewport" ref={viewportRef}>
        <div className="faculty-wheel__track" ref={trackRef}>
          {safeMembers.map((member, index) => {
            const rotation = (360 / safeMembers.length) * index;
            const photo = member.imageSrc;

            return (
              <article
                key={member.name}
                className="faculty-wheel__card"
                style={{ transform: `rotateY(${rotation}deg) translateZ(${radius}px)` }}
                onClick={(event) => openProfile(member, event.currentTarget)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openProfile(member, event.currentTarget as HTMLElement);
                  }
                }}
                aria-label={`Open profile for ${member.name}`}
                aria-haspopup="dialog"
                aria-controls={`${createMemberId(member.name)}-dialog`}
              >
                <div className="faculty-wheel__photo">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 960px) 208px, 280px"
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
                  {showSchool ? <p className="faculty-wheel__school">{member.school}</p> : null}
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

      <AnimatePresence mode="wait">
        {activeProfile ? (
          <motion.div
            className="faculty-overlay"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.18 : 0.24, ease: OVERLAY_EASE }}
            onClick={closeProfile}
            onTouchMoveCapture={(event) => {
              event.stopPropagation();
            }}
            onWheelCapture={(event) => {
              event.stopPropagation();

              if (event.target === event.currentTarget) {
                event.preventDefault();
              }
            }}
          >
            <motion.article
              id={`${createMemberId(activeProfile.member.name)}-dialog`}
              className="faculty-overlay__panel"
              data-lenis-prevent
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${createMemberId(activeProfile.member.name)}-title`}
              onClick={(event) => event.stopPropagation()}
              onTouchMoveCapture={(event) => {
                event.stopPropagation();
              }}
              onWheelCapture={(event) => {
                event.stopPropagation();
              }}
              initial={
                prefersReducedMotion
                  ? { opacity: 0, y: 20 }
                  : {
                      opacity: 0.28,
                      x: activeProfile.originX,
                      y: activeProfile.originY,
                      scale: activeProfile.originScale,
                    }
              }
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0, y: 20 }
                  : {
                      opacity: 0,
                      x: activeProfile.originX,
                      y: activeProfile.originY,
                      scale: activeProfile.originScale,
                    }
              }
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.42, ease: OVERLAY_EASE }}
            >
              <header className="faculty-overlay__header">
                <div className="faculty-overlay__identity">
                  <div className="faculty-overlay__photo">
                    {activeMember?.imageSrc ? (
                      <Image
                        src={activeMember.imageSrc}
                        alt={activeMember.name}
                        fill
                        sizes="(max-width: 960px) 34vw, 220px"
                        className="faculty-overlay__photo-img"
                        style={
                          activeMember.imagePosition
                            ? { objectPosition: activeMember.imagePosition }
                            : undefined
                        }
                      />
                    ) : (
                      <div className="faculty-overlay__photo-fallback">Faculty</div>
                    )}
                  </div>
                  <div className="faculty-overlay__title">
                    <span>{activeMember?.role}</span>
                    <h3 id={`${createMemberId(activeProfile.member.name)}-title`}>
                      {activeMember?.name}
                    </h3>
                    <p className="faculty-overlay__credentials">{activeMember?.school}</p>
                  </div>
                </div>
                <button
                  ref={closeButtonRef}
                  className="faculty-overlay__close"
                  type="button"
                  onClick={closeProfile}
                  aria-label="Close faculty profile"
                >
                  <X size={22} />
                </button>
              </header>

              <div className="faculty-overlay__body">
                <article className="faculty-overlay__narrative">
                  <h4>Profile overview</h4>
                  {biography.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>

                <div className="faculty-overlay__details">
                  <article>
                    <h4>Academic background</h4>
                    <p>{activeMember?.school}</p>
                  </article>

                  <article>
                    <h4>Focus areas</h4>
                    <ul className="faculty-overlay__list">
                      {focusAreas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </article>

                  <article>
                    <h4>Directory highlights</h4>
                    <ul className="faculty-overlay__list">
                      {profileHighlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>

                  {activeMember?.profileHref ? (
                    <article>
                      <h4>Official profile</h4>
                      <p>
                        Cross-check this faculty member on the official GU TECH faculty directory for
                        the live institutional listing.
                      </p>
                      <Link
                        className="faculty-overlay__link"
                        href={activeMember.profileHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open official faculty profile
                      </Link>
                    </article>
                  ) : null}
                </div>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
