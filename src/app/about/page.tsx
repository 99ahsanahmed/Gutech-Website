import { Briefcase, Cpu, GraduationCap, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import SectionHeading from '@/components/site/SectionHeading';
import { createMetadata, siteConfig } from '@/lib/site-data';

export const metadata = createMetadata(
  'About',
  'About GU TECH, academic mission, institutional values, and student-focused direction.',
);

const valuePillars = [
  {
    icon: GraduationCap,
    title: 'Faculty From Top Schools',
    text: "Our institution highlights distinguished faculty from leading schools to guide students toward academic excellence and practical outcomes.",
  },
  {
    icon: Briefcase,
    title: 'Earn As You Learn',
    text: "The official 2+2 pathway and incubation direction helps students complete core academic progress and start practical earning exposure in later years.",
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Leadership Development',
    text: 'Academic growth is paired with character, values, and responsible leadership so students can serve with integrity in professional life.',
  },
  {
    icon: Cpu,
    title: 'Tech Inspired, Market-Driven Programs',
    text: 'Programs combine modern technology, communication, and domain skills to align learning with current market expectations.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="home-hero home-hero--locked about-page-hero">
        <Image
          src="/about-hero-campus.png"
          alt="Students entering GU TECH campus building"
          fill
          priority
          className="home-hero__image"
          sizes="100vw"
        />
        <div className="home-hero__overlay about-page-hero__overlay" />
        <div className="home-hero__noise" />
        <div className="container home-hero__content about-page-hero__content">
          <FadeUp className="about-page-hero__copy">
            <span className="eyebrow eyebrow--light">About GU TECH</span>
            <h1>Building capable professionals with faith, character, and competence.</h1>
            <p>
              Founded in 2023, GU TECH positions academic excellence with ethical principles and
              market-driven learning so students can solve real-world challenges with responsibility.
            </p>
            <div className="home-hero__actions">
              <Link className="button button--light" href="/programs">
                Explore programs
              </Link>
              <a className="button button--ghost" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp admissions
              </a>
            </div>
            <div className="about-page-hero__facts">
              <div className="about-page-hero__fact">
                <span>Established</span>
                <strong>2023</strong>
              </div>
              <div className="about-page-hero__fact">
                <span>Core direction</span>
                <strong>Future knowledge and AI economy</strong>
              </div>
              <div className="about-page-hero__fact">
                <span>Academic promise</span>
                <strong>Ethics + employable capability</strong>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <main className="home-sheet">
        <section className="section home-section about-page__story">
          <div className="container">
            <div className="about-page__split">
              <FadeUp>
                <SectionHeading
                  eyebrow="Institutional Positioning"
                  title="Imparting market-driven skills for the future knowledge and AI economy."
                  description="At GU TECH (Ghazali University School of Technology), the core direction is to combine relevant industry capability with values-led higher education."
                />
                <p className="about-page__lead">
                  The official institutional message emphasizes a world led by highly capable
                  professionals with a strong sense of truth, justice, and service to humanity.
                  The project aspires to build the nation on foundations of faith, character, and
                  competence through accessible education. This direction is reflected in the way
                  GU TECH positions programs, departments, innovation activity, and admissions
                  support as one coherent student pathway instead of isolated pages.
                </p>
                <StaggerContainer className="about-page__mini-grid">
                  <StaggerItem className="about-page__mini-card about-motion-card">
                    <Sparkles size={18} />
                    <div>
                      <h3>Future-facing learning</h3>
                      <p>Aligned with AI-era skills, communication, and practical execution.</p>
                    </div>
                  </StaggerItem>
                  <StaggerItem className="about-page__mini-card about-motion-card">
                    <HeartHandshake size={18} />
                    <div>
                      <h3>Values in practice</h3>
                      <p>Character and ethical grounding are treated as core academic outcomes.</p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </FadeUp>
              <FadeUp className="about-page__story-image" delay={0.08}>
                <Image
                  src="/about-story-session.png"
                  alt="Student mentoring and classroom engagement at GU TECH"
                  fill
                  className="about-page__cover-image"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </FadeUp>
            </div>
          </div>
        </section>

        <section className="section home-section home-section--muted about-page__vision-mission">
          <div className="container">
            <SectionHeading
              eyebrow="Vision and Mission"
              title="Institutional intent with ethical clarity."
              description="Officially stated direction focused on leadership, capability, and service."
              centered
            />
            <StaggerContainer className="about-page__pillars">
              <StaggerItem className="about-page__pillar-card about-motion-card">
                <span className="eyebrow">Our Vision</span>
                <h3>A world led by highly capable professionals.</h3>
                <p>
                  With a strong sense of truth, justice, and consideration for humanity driven by
                  revelation.
                </p>
              </StaggerItem>
              <StaggerItem className="about-page__pillar-card about-motion-card">
                <span className="eyebrow">Our Mission</span>
                <h3>Nurture exceptional leaders in business, IT, and sciences.</h3>
                <p>
                  Instilled with ethical values and a passion to serve humanity through
                  academically strong and practical education.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        <section className="section home-section about-page__strengths">
          <div className="container">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Institutional strengths from official GUTECH positioning."
              description="The page structure below expands official points into a clearer, modern read."
              centered
            />
            <StaggerContainer className="about-page__strength-grid">
              {valuePillars.map((item) => (
                <StaggerItem className="about-page__strength-card card-3d" key={item.title}>
                  <div className="feature-card__icon">
                    <item.icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section home-section about-page__momentum">
          <div className="container">
            <div className="about-page__momentum-shell">
              <FadeUp className="about-page__momentum-copy">
                <SectionHeading
                  eyebrow="Institutional Momentum"
                  title="Academic identity connected to industry and innovation."
                  description="Official updates and collaborations show how GU TECH extends learning into practical project exposure and mentorship-led growth."
                />
                <p className="about-page__lead">
                  Across admissions pathways, faculty-led engagement, and public collaborations,
                  the university presents a model where students are prepared for both career
                  readiness and values-led leadership. This creates stronger confidence for
                  prospective students and families evaluating long-term fit.
                </p>
                <div className="about-page__momentum-points">
                  <article>
                    <h3>Industry collaboration</h3>
                    <p>Partnership updates connect classroom direction with enterprise use cases.</p>
                  </article>
                  <article>
                    <h3>Mentorship culture</h3>
                    <p>Faculty-led sessions reinforce guidance beyond the classroom curriculum.</p>
                  </article>
                  <article>
                    <h3>Student progression</h3>
                    <p>Programs and support channels are mapped for clearer decision making.</p>
                  </article>
                </div>
              </FadeUp>
              <FadeUp className="about-page__momentum-image" delay={0.1}>
                <Image
                  src="/about-collaboration.jpg"
                  alt="Institutional collaboration signing session at GU TECH"
                  fill
                  className="about-page__cover-image"
                  sizes="(min-width: 960px) 42vw, 100vw"
                />
                <div className="about-page__momentum-overlay" />
              </FadeUp>
            </div>
          </div>
        </section>

        <section className="section home-section about-page__cta-wrap">
          <div className="container">
            <FadeUp className="about-page__cta">
              <div className="about-page__cta-image">
                <Image
                  src="/campus-hero.jpg"
                  alt="GU TECH campus exterior and student activity"
                  fill
                  className="about-page__cover-image"
                  sizes="(min-width: 960px) 42vw, 100vw"
                />
                <div className="about-page__cta-overlay" />
              </div>
              <div className="about-page__cta-copy">
                <span className="eyebrow">Scholarships and Financial Aid</span>
                <h2>Accessible education with merit and need-based support.</h2>
                <p>
                  GU TECH highlights scholarships and financial support to reduce entry barriers
                  for deserving students and keep talent progression open.
                </p>
                <div className="about-page__cta-actions">
                  <Link className="button button--primary" href="/admissions">
                    View admissions process
                  </Link>
                  <a className="button button--secondary" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                    Talk on WhatsApp
                  </a>
                </div>
                <div className="about-page__support-grid">
                  <article>
                    <h3>Merit Scholarships</h3>
                    <p>Admission-linked merit waivers and performance-led support routes.</p>
                  </article>
                  <article>
                    <h3>Need-Based Assistance</h3>
                    <p>Financial aid direction for students who require support to continue.</p>
                  </article>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </>
  );
}
