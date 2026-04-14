import { Briefcase, Cpu, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
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
      <section className="relative min-h-[80vh] flex flex-col justify-between overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero-campus.png"
            alt="Students entering GU TECH campus building"
            fill
            priority
            className="object-cover opacity-30 mix-blend-luminosity brightness-75 transition-transform duration-[2000ms] scale-100 hover:scale-[1.02]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14161e] via-[#14161e]/90 to-brand/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-[#111217]/50 to-transparent" />
        </div>
        
        {/* Main Hero Copy - Centered vertically within remaining space */}
        <div className="container relative z-10 px-4 md:px-8 mt-auto mb-auto pt-32 pb-16">
          <FadeUp className="max-w-4xl">
            <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/50 mb-6 inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-brand"></div>
              About GU TECH
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 text-white drop-shadow-lg">
              Building capable professionals with <br className="hidden md:block"/><span className="text-brand italic pr-4">faith, character, and competence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-[1.7] max-w-2xl">
              Founded in 2023, GU TECH positions academic excellence with ethical principles and market-driven learning so students can solve real-world challenges with responsibility.
            </p>
          </FadeUp>
        </div>

        {/* Hero Stats Strip pinned cleanly to the bottom border */}
        <div className="relative z-10 w-full border-t border-white/10 bg-[#111217] lg:bg-[#111217]/60 lg:backdrop-blur-md">
           <FadeUp delay={0.2} className="container">
             <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
               
               <div className="p-8 md:px-10 md:py-10 flex flex-col justify-center group hover:bg-white/5 transition-colors duration-500">
                 <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-brand font-bold mb-3">Established</div>
                 <div className="text-3xl md:text-4xl font-display text-white">2023</div>
               </div>

               <div className="p-8 md:px-10 md:py-10 flex flex-col justify-center group hover:bg-white/5 transition-colors duration-500">
                 <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-brand font-bold mb-3">Core direction</div>
                 <div className="text-xl md:text-2xl font-display text-white leading-tight">Future knowledge & AI economy</div>
               </div>

               <div className="p-8 md:px-10 md:py-10 flex flex-col justify-center group hover:bg-white/5 transition-colors duration-500">
                 <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-brand font-bold mb-3">Academic promise</div>
                 <div className="text-xl md:text-2xl font-display text-white leading-tight">Ethics + employable capability</div>
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
