import Link from 'next/link';
import Image from 'next/image';

import FadeUp from '@/components/animations/FadeUp';
import ParallaxHeroBackground from '@/components/animations/ParallaxHeroBackground';
import MediaPanel from '@/components/site/MediaPanel';
import type { Fact, HeroAction } from '@/lib/site-data';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  actions?: HeroAction[];
  facts?: Fact[];
  imageLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  compact?: boolean;
  locked?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  badge,
  actions = [],
  facts = [],
  imageLabel,
  imageSrc,
  imageAlt,
  compact = false,
  locked = false,
}: PageHeroProps) {
  if (locked) {
    const backgroundSrc = imageSrc ?? '/campus-hero.jpg';
    const factItems = facts.length ? facts : [];

    return (
      <section className={`home-hero home-hero--locked detail-hero${compact ? ' detail-hero--compact' : ''}`}>
        <Image
          src={backgroundSrc}
          alt={imageAlt ?? title}
          fill
          className="home-hero__image"
          sizes="100vw"
          priority
        />
        <div className="home-hero__overlay detail-hero__overlay" />
        <div className="home-hero__noise" />
        <div className="container home-hero__content detail-hero__content">
          <FadeUp className="detail-hero__copy">
            <span className="eyebrow eyebrow--light">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            {badge ? <div className="hero-badge">{badge}</div> : null}

            {actions.length ? (
              <div className="home-hero__actions">
                {actions.map((action) =>
                  action.external ? (
                    <a
                      key={action.label}
                      className={`button button--${action.variant ?? 'primary'}`}
                      href={action.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {action.label}
                    </a>
                  ) : (
                    <Link
                      key={action.label}
                      className={`button button--${action.variant ?? 'primary'}`}
                      href={action.href}
                    >
                      {action.label}
                    </Link>
                  ),
                )}
              </div>
            ) : null}

            {factItems.length ? (
              <div className="detail-hero__metrics">
                {factItems.map((fact) => (
                  <div key={fact.label} className="detail-hero__metric">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            ) : null}
          </FadeUp>
        </div>
      </section>
    );
  }

  const hasMedia = Boolean(imageLabel);

  return (
    <section className={`hero${compact ? ' hero--compact' : ''}${locked ? ' home-hero--locked' : ''}`}>
      <ParallaxHeroBackground />
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="container hero-grid">
        <FadeUp className="hero-copy">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {badge ? <div className="hero-badge">{badge}</div> : null}

          {actions.length ? (
            <div className="hero-actions">
              {actions.map((action) =>
                action.external ? (
                  <a
                    key={action.label}
                    className={`button button--${action.variant ?? 'primary'}`}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {action.label}
                  </a>
                ) : (
                  <Link
                    key={action.label}
                    className={`button button--${action.variant ?? 'primary'}`}
                    href={action.href}
                  >
                    {action.label}
                  </Link>
                ),
              )}
            </div>
          ) : null}

          {facts.length ? (
            <div className="hero-facts">
              {facts.map((fact) => (
                <div key={fact.label} className="hero-fact">
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          ) : null}
        </FadeUp>

        {hasMedia ? (
          <FadeUp className="hero-media" delay={0.1}>
            <MediaPanel label={imageLabel!} src={imageSrc} alt={imageAlt} tall />
          </FadeUp>
        ) : null}
      </div>
    </section>
  );
}
