import { CheckCircle, HeartHandshake, Lightbulb, PlayCircle, Target, Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { createMetadata } from '@/lib/site-data';

export const metadata = createMetadata(
  'Design Thinking',
  'Problem solving from Day One. The first immersive Design Thinking program embedded inside your degree.',
);

export default function DesignThinkingPage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="hero home-hero home-hero--locked" style={{ backgroundColor: 'var(--ink)' }}>
        <Image
          src="/programs-hero.jpg"
          alt="Students brainstorming with sticky notes"
          fill
          priority
          className="home-hero__image"
          sizes="100vw"
          style={{ objectPosition: 'center', opacity: 0.35 }}
        />
        <div className="home-hero__overlay" style={{ background: 'linear-gradient(to right, rgba(14,14,18,0.95) 35%, rgba(14,14,18,0.25))' }} />
        <div className="container home-hero__content fade-in-up">
          <div className="home-hero__grid" style={{ gridTemplateColumns: '1fr' }}>
            <div style={{ maxWidth: '820px' }}>
              <span className="eyebrow eyebrow--light" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--brand)', border: 'none' }}>
                Why wait four years to solve a real problem?
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '1rem', lineHeight: 1.05 }}>
                Problem Solving From Day One.
              </h1>
              <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', color: 'rgba(255,255,255,0.85)', maxWidth: '650px', lineHeight: 1.6 }}>
                GU Tech is the only institution to integrate Design Thinking into the very first semester of the BSCS program. We don't just train coders; we craft innovators.
              </p>
              <div className="home-hero__actions" style={{ marginTop: '2.5rem', gap: '1rem' }}>
                <a className="button button--primary" href="#media-vault">
                  <PlayCircle size={18} /> Watch the Student Podcast
                </a>
                <a className="button button--ghost" href="#impact">
                  Explore Prototypes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="home-sheet" style={{ background: 'var(--ink)' }}>
        
        {/* SECTION 2: THE PROCESS */}
        <section className="section" style={{ padding: '6.5rem 0', overflow: 'hidden' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <h2 style={{ fontSize: '2.8rem', color: '#fff', fontFamily: 'var(--font-display)', margin: 0 }}>The Innovation Loop</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', fontSize: '1.1rem' }}>A rapid iteration framework empowering students to prototype real solutions.</p>
            </div>
            
            <div className="dt-process-grid">
              <div className="dt-process-line">
                <div className="dt-process-line-glow"></div>
              </div>
              
              <div className="dt-process-step fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="dt-icon-wrap">
                  <HeartHandshake size={32} color="#fff" />
                </div>
                <h3 style={{ color: '#fff', margin: 0, fontFamily: 'var(--font-display)' }}>Empathize</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Understand users deeply</p>
              </div>
              <div className="dt-process-step fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="dt-icon-wrap">
                  <Target size={32} color="#fff" />
                </div>
                <h3 style={{ color: '#fff', margin: 0, fontFamily: 'var(--font-display)' }}>Define</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Frame the right problem</p>
              </div>
              <div className="dt-process-step fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="dt-icon-wrap">
                  <Lightbulb size={32} color="#fff" />
                </div>
                <h3 style={{ color: '#fff', margin: 0, fontFamily: 'var(--font-display)' }}>Ideate</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Brainstorm wild solutions</p>
              </div>
              <div className="dt-process-step fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="dt-icon-wrap">
                  <Wrench size={32} color="#fff" />
                </div>
                <h3 style={{ color: '#fff', margin: 0, fontFamily: 'var(--font-display)' }}>Prototype</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Build to think</p>
              </div>
              <div className="dt-process-step fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="dt-icon-wrap">
                  <CheckCircle size={32} color="#fff" />
                </div>
                <h3 style={{ color: '#fff', margin: 0, fontFamily: 'var(--font-display)' }}>Test</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Learn and iterate</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: IMPACT SHOWCASE (ZIG-ZAG) */}
        <section id="impact" className="section" style={{ background: '#09090b', padding: '6.5rem 0' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '7rem' }}>
            
            {/* Block A */}
            <div className="zig-zag-row">
              <div className="zig-zag-image-wrapper lesson-reveal-wrapper glass-card border-neon-red">
                <Image src="/DT_Imtiaz.jpeg" alt="Imtiaz Super Market Checkout" fill sizes="(min-width: 768px) 50vw, 100vw" style={{ objectFit: 'cover' }} />
                <div className="lesson-reveal-content">
                  <h4 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>Key Lesson Learned</h4>
                  <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>Empathy isn't just listening—it's experiencing the frustration of long queues during rush hour firsthand.</p>
                </div>
              </div>
              <div className="zig-zag-content">
                <span className="eyebrow" style={{ backgroundColor: 'var(--brand-wash)', color: 'var(--brand)', marginBottom: '1.25rem' }}>Retail Excellence</span>
                <h2 style={{ color: '#fff', fontSize: '2.8rem', fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.1 }}>Optimizing the Checkout.</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1.5rem', fontSize: '1.15rem', lineHeight: 1.65 }}>
                  Working directly with Imtiaz Super Market, first-semester students mapped the psychological friction of long checkout times. By conducting empathy interviews right in the crowded aisles, they redesigned the queuing model to drastically reduce perceived wait times.
                </p>
              </div>
            </div>

            {/* Block B */}
            <div className="zig-zag-row--reverse">
              <div className="zig-zag-image-wrapper lesson-reveal-wrapper glass-card border-neon-red">
                <Image src="/DT_Activity.jpg" alt="Vending Machine Hardware Prototype" fill sizes="(min-width: 768px) 50vw, 100vw" style={{ objectFit: 'cover' }} />
                <div className="lesson-reveal-content">
                  <h4 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>Key Lesson Learned</h4>
                  <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>Hardware restrictions shouldn't limit software intuition. Digital interfaces must complement physical ergonomics.</p>
                </div>
              </div>
              <div className="zig-zag-content">
                <span className="eyebrow" style={{ backgroundColor: 'var(--brand-wash)', color: 'var(--brand)', marginBottom: '1.25rem' }}>Hardware & UI Innovation</span>
                <h2 style={{ color: '#fff', fontSize: '2.8rem', fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.1 }}>Reimagining the Vending Machine.</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1.5rem', fontSize: '1.15rem', lineHeight: 1.65 }}>
                  Prototypes aren't always digital. Our teams mapped the physical interactions of legacy vending machines and built alternative hardware and UI prototypes that cut transaction steps by 40%. Look closely at their hand-sketched wireframes paired with the final acrylic builds.
                </p>
              </div>
            </div>

            {/* Block C */}
            <div className="zig-zag-row">
              <div className="zig-zag-image-wrapper lesson-reveal-wrapper glass-card border-neon-red">
                <Image src="/DT_workshop.jpg" alt="Community Workshops in Karachi" fill sizes="(min-width: 768px) 50vw, 100vw" style={{ objectFit: 'cover' }} />
                <div className="lesson-reveal-content">
                  <h4 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>Key Lesson Learned</h4>
                  <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>To teach is to learn twice. Leadership emerges when you guide others through ambiguity.</p>
                </div>
              </div>
              <div className="zig-zag-content">
                <span className="eyebrow" style={{ backgroundColor: 'var(--brand-wash)', color: 'var(--brand)', marginBottom: '1.25rem' }}>Beyond The Campus</span>
                <h2 style={{ color: '#fff', fontSize: '2.8rem', fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.1 }}>Community Impact.</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1.5rem', fontSize: '1.15rem', lineHeight: 1.65 }}>
                  Our students don't just keep their skills enclosed in our labs. As part of a larger initiative, they facilitate free Design Thinking workshops for local schools across Karachi, embodying our university's bedrock mission of Leadership through Service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: MEDIA VAULT (PODCAST + BENTO GRID) */}
        <section id="media-vault" className="section" style={{ background: 'var(--ink)', padding: '6.5rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.8rem', color: '#fff', fontFamily: 'var(--font-display)', margin: 0 }}>Inside the Innovation Lab</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', fontSize: '1.1rem' }}>Listen to student reflections and see the raw process in action.</p>
            </div>

            <div className="bento-grid">
              
              {/* Podcast Main Box */}
              <div className="bento-item bento-main glass-card border-neon-red" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                <span className="eyebrow" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>Hear it from the Innovators</span>
                <div style={{ flex: 1, position: 'relative', borderRadius: '12px', overflow: 'hidden', minHeight: '320px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    src="https://www.youtube.com/embed/sxPSMyLJ6Jc?si=esPmGQj2Y64JgbFK" 
                    title="Student Podcast" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
                <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(139,24,29,0.1)', borderLeft: '4px solid var(--brand)' }}>
                  <p style={{ color: '#fff', margin: 0, fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.5 }}>
                    "Before this semester, I thought coding was just syntax. Design thinking taught me that code is useless if you don't actually understand the human you're building it for."
                  </p>
                </div>
              </div>

              {/* Gallery Box 1 */}
              <div className="bento-item border-neon-red">
                <Image src="/DT_Imtiaz.jpeg" alt="Sticky note brainstorming" fill sizes="(max-width: 768px) 100vw, 33vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                  <h4 style={{ margin: 0, color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>User Research</h4>
                  <p style={{ margin: '0.25rem 0 0', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Conducting empathy interviews</p>
                </div>
              </div>

              {/* Gallery Box 2 */}
              <div className="bento-item border-neon-red">
                <Image src="/DT_Activity.jpg" alt="Physical Prototypes" fill sizes="(max-width: 768px) 100vw, 33vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                  <h4 style={{ margin: 0, color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>Iterative Design</h4>
                  <p style={{ margin: '0.25rem 0 0', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Building low-fidelity mockups</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="section" style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '650px', padding: '4rem 0' }}>
            <h2 style={{ fontSize: '3.2rem', color: '#fff', fontFamily: 'var(--font-display)', margin: '0 0 1.5rem', lineHeight: 1.1 }}>
              Ready to think differently?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Join a cohort where innovation is a daily practice, not a senior year capstone project. Build the skills that define the future knowledge economy.
            </p>
            <Link href="/admissions" className="button button--primary" style={{ padding: '1.1rem 2.25rem', fontSize: '1.1rem' }}>
              Apply for the next Cohort
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
