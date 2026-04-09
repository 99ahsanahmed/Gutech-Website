import Image from 'next/image';
import Link from 'next/link';

import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import FacultyWheel from '@/components/site/FacultyWheel';
import HeroStack from '@/components/site/HeroStack';
import NewsReelMobile from '@/components/site/NewsReelMobile';
import SectionHeading from '@/components/site/SectionHeading';
import {
  createMetadata,
  facultyMembers,
  homeHighlights,
  homeMetrics,
  newsItems,
  programs,
  siteConfig,
} from '@/lib/site-data';

export const metadata = createMetadata(
  'Home',
  'Official GU TECH university website with admissions, programs, departments, faculty, and student support.',
);

const homeSteps = [
  {
    title: 'Explore pathways',
    text: 'Review undergraduate and graduate routes with clear outcomes and progression.',
  },
  {
    title: 'Connect with admissions',
    text: 'Get fee, scholarship, and process support through official channels.',
  },
  {
    title: 'Start your journey',
    text: 'Apply through the official portal with guided onboarding support.',
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero home-hero--locked">
        <Image
          src="/campus-hero.jpg"
          alt="GU TECH campus"
          fill
          priority
          className="home-hero__image"
          sizes="100vw"
        />
        <div className="home-hero__overlay" />
        <div className="home-hero__noise" />
        <div className="container home-hero__content">
          <div className="home-hero__grid">
            <div>
              <h1>Where ambition meets academic excellence.</h1>
              <p>
                A modern university experience across technology, management, innovation, and
                professional development.
              </p>
              <div className="home-hero__actions">
                <Link className="button button--light" href="/programs">
                  Explore programs
                </Link>
                <a
                  className="button button--ghost"
                  href={siteConfig.applyHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply now
                </a>
              </div>
              <div className="home-hero__metrics">
                {homeMetrics.map((fact) => (
                  <div key={fact.label} className="home-hero__metric">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <HeroStack />
          </div>
        </div>
      </section>

      <main className="home-sheet">
        <section className="home-marquee">
          <div className="home-marquee__rail">
            <div className="home-marquee__track">
              <span>Admissions Open</span>
              <span>BS Computer Science</span>
              <span>BBA</span>
              <span>MS Islamic Banking &amp; Finance</span>
              <span>Executive Learning</span>
              <span>Design Thinking Resources</span>
              <span>Admissions Open</span>
              <span>BS Computer Science</span>
            </div>
            <div className="home-marquee__track" aria-hidden="true">
              <span>Admissions Open</span>
              <span>BS Computer Science</span>
              <span>BBA</span>
              <span>MS Islamic Banking &amp; Finance</span>
              <span>Executive Learning</span>
              <span>Design Thinking Resources</span>
              <span>Admissions Open</span>
              <span>BS Computer Science</span>
            </div>
          </div>
        </section>

        <section className="section home-section">
          <div className="container">
            <SectionHeading
              eyebrow="A Mission Defined by Possibility"
              title="A university platform built for readable decisions."
              description="Clear content hierarchy, stronger visual rhythm, and immediate action routes for students and families."
              centered
            />
            <StaggerContainer className="info-grid">
              {homeHighlights.map((item) => (
                <StaggerItem key={item.title} className="info-card card-3d">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="home-image-break">
          <Image src="/programs-hero.jpg" alt="Campus news and student activities" fill className="home-image-break__image" />
          <div className="home-image-break__overlay" />
        </section>

        <section className="section home-section">
          <div className="container">
            <SectionHeading
              eyebrow="Academics"
              title="Undergraduate and graduate pathways."
              description="Every program page is presented with clear structure, outcomes, and admissions routes."
              centered
            />
            <StaggerContainer className="program-grid">
              {programs.map((program) => (
                <StaggerItem key={program.slug} className="program-card card-3d">
                  <span className="program-card__meta">{program.category}</span>
                  <h3>{program.title}</h3>
                  <p>{program.summary}</p>
                  <Link className="button button--primary" href={`/programs/${program.slug}`}>
                    View program
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="home-image-break home-image-break--alt">
          <Image src="/executive-hero.jpg" alt="Research and innovation activities" fill className="home-image-break__image" />
          <div className="home-image-break__overlay" />
        </section>

        <section className="section home-section home-section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Admissions Journey"
              title="From first visit to enrolled student."
              description="A streamlined flow helps students move from interest to application without friction."
            />
            <StaggerContainer className="journey-grid">
              {homeSteps.map((step, index) => (
                <StaggerItem key={step.title} className="journey-card card-3d">
                  <span className="journey-step">Step {index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="hero-actions home-actions">
              <Link className="button button--primary" href="/admissions">
                Start admissions
              </Link>
              <a className="button button--light" href={siteConfig.whatsappHref} rel="noreferrer" target="_blank">
                WhatsApp support
              </a>
              <Link className="button button--secondary" href="/contact">
                Submit inquiry
              </Link>
            </div>
          </div>
        </section>

        <section className="section home-section">
          <div className="container split-grid">
            <div>
              <SectionHeading
                eyebrow="Faculty Spotlight"
                title="Visible academic leadership."
                description="Faculty identity and expertise are presented as core trust signals."
              />
              <FacultyWheel members={facultyMembers} />
              <Link className="button button--primary" href="/faculty">
                View full faculty directory
              </Link>
            </div>
            <div>
              <SectionHeading
                eyebrow="News and Updates"
                title="Institutional activity and partnerships."
                description="A structured media layer for events, collaborations, and student engagement."
              />
              <StaggerContainer className="news-grid news-grid--desktop" style={{ gridTemplateColumns: '1fr' }}>
                {newsItems.slice(0, 3).map((item) => (
                  <StaggerItem key={item.title} className="news-card card-3d">
                    <span className="news-meta">
                      {item.category} - {item.dateLabel}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <NewsReelMobile items={newsItems.slice(0, 3)} />

              <Link className="button button--secondary" href="/news">
                Open news page
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
