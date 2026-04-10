import { Briefcase, Cpu, GraduationCap, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { createMetadata, homeMetrics } from '@/lib/site-data';

export const metadata = createMetadata(
  'About',
  'About GU TECH, academic mission, institutional values, and student-focused direction.',
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GU TECH"
        title="Education with purpose."
        description="Building academic depth, practical capability, and ethical leadership."
        imageLabel="Campus and student life"
        imageSrc="/campus-hero.jpg"
        compact
        locked
      />

      <main className="home-sheet">
        {/* Section 1: Intro (Text Left / Image Right) */}
        <section className="section home-section">
          <div className="container">
            <div className="zig-zag-row">
              <div className="zig-zag-content">
                <SectionHeading
                  eyebrow="About GU TECH"
                  title="Imparting market-driven skills for the future."
                  description="At GU TECH (Ghazali University School of Technology), our primary focus is on imparting market-driven skills for the future knowledge and AI economy, while passionately pursuing our values and ideals."
                />
                <p style={{ marginTop: '1.25rem', fontSize: '1.1rem', color: 'rgba(50, 50, 50, 0.85)', lineHeight: 1.6 }}>
                  The AI project at GU TECH, in conjunction with Ghazali, is perhaps the most significant project, envisioning a world led by highly capable professionals with a strong sense of truth, justice, and a passion to serve humanity, inspired by divine revelation. 
                  Overall, the Al Ghazali/GU TECH project aspires to build the nation on the strong foundations of faith, character, and competence through education that is accessible to all.
                </p>
              </div>
              <div className="zig-zag-image-wrapper">
                <Image
                  src="/programs-hero.jpg"
                  alt="GU TECH students"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Vision/Mission (Image Left / Text Right) */}
        <section className="section home-section home-section--muted">
          <div className="container">
            <div className="zig-zag-row--reverse">
              <div className="zig-zag-content">
                <SectionHeading
                  eyebrow="Our Vision"
                  title="A world led by highly capable professionals."
                  description="A world led by highly capable professionals with a strong sense of truth, justice and consideration for humanity driven by revelation."
                />
                <div style={{ marginTop: '3.5rem' }}>
                  <SectionHeading
                    eyebrow="Our Mission"
                    title="Nurturing exceptional leaders."
                    description="To nurture exceptional leaders in business, IT, and sciences instilled with strong ethical values and a passion to serve humanity inspired by divine revelation."
                  />
                </div>
              </div>
              <div className="zig-zag-image-wrapper">
                <Image
                  src="/executive-hero.jpg"
                  alt="Vision and Mission"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why GU TECH */}
        <section className="section home-section">
          <div className="container">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why GU TECH?"
              description="Our institution has unique pillars that elevate the educational framework beyond traditional learning."
              centered
            />
            <div className="feature-card-grid" style={{ marginTop: '3.5rem' }}>
              
              <div className="feature-card">
                <div className="feature-card__icon">
                  <GraduationCap size={24} />
                </div>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "1.25rem", lineHeight: 1.1 }}>
                  01 Faculty From Top Schools
                </h3>
                <p style={{ marginTop: '0.9rem', color: 'rgba(50, 50, 50, 0.8)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Our institution boasts a distinguished faculty drawn from the world's leading schools, bringing unparalleled expertise and insights to guide students towards academic excellence and real-world success.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-card__icon">
                  <Briefcase size={24} />
                </div>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "1.25rem", lineHeight: 1.1 }}>
                  02 Earn As You Learn
                </h3>
                <p style={{ marginTop: '0.9rem', color: 'rgba(50, 50, 50, 0.8)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Empowering students with flexibility, our 2+2 program structure and incubation center allow them to earn, learn, and achieve a bachelor's degree simultaneously. After two years, 65% of your academic work is completed, leaving ample time for earning in the third and fourth years.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-card__icon">
                  <ShieldCheck size={24} />
                </div>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "1.25rem", lineHeight: 1.1 }}>
                  03 Ethical Leadership Development
                </h3>
                <p style={{ marginTop: '0.9rem', color: 'rgba(50, 50, 50, 0.8)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Our university goes beyond academics, emphasizing character building and instilling high ethical and moral standards, preparing students to lead with integrity and make a meaningful impact on society.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-card__icon">
                  <Cpu size={24} />
                </div>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "1.25rem", lineHeight: 1.1 }}>
                  04 Tech Inspired, Market-Driven Programs
                </h3>
                <p style={{ marginTop: '0.9rem', color: 'rgba(50, 50, 50, 0.8)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Our curriculum strategically blends industry domain knowledge, creating an immediate demand in the job market, while our faculty imparts cutting-edge technology and communication skills, preparing students for both local and global job markets.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Scholarships */}
        <section className="section home-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="callout-box">
              <span className="eyebrow" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', marginBottom: '1.25rem' }}>
                Scholarships & Financial Aid
              </span>
              <h2>50% Tuition Fee Off <br/>(Limited Seats)</h2>
              <p>
                GU TECH is dedicated to breaking down financial barriers for deserving students, ensuring smooth accessibility to higher education. We achieve this through a range of initiatives, including merit-based scholarships and need-based financial assistance plans. 
                Furthermore, we collaborate with like-minded entities to create strategic partnerships which not only provide additional financial resources but also establish valuable support networks for students, fostering an inclusive and thriving educational community at GU Tech.
              </p>
              
              <div className="scholarship-list">
                <div className="scholarship-group">
                  <h3>Merit Scholarships</h3>
                  <ul>
                    <li>Merit scholarship at the time of admission</li>
                    <li>Merit scholarship for admitted students</li>
                    <li>Institutional/Academic partners scholarship</li>
                  </ul>
                </div>
                <div className="scholarship-group">
                  <h3>Financial Assistance Plans</h3>
                  <ul>
                    <li>Need-based Financial Assistance</li>
                    <li>Interest-free Loans</li>
                    <li>Work-Study Program</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
