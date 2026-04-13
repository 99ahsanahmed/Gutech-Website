import Link from 'next/link';
import { GraduationCap, Handshake, Wallet, Landmark, ClipboardList, PiggyBank, Users } from 'lucide-react';

import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import ScrollBlur from '@/components/animations/ScrollBlur';
import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import { siteConfig } from '@/lib/site-data';

export const metadata = {
  title: 'Scholarships & Financial Aid | GU TECH',
  description: 'Explore scholarship opportunities and financial assistance plans at GU TECH.',
};

export default function ScholarshipsPage() {
  const meritPaths = [
    'Merit at time of admission',
    'Merit for admitted students',
    'Institutional / Academic partners',
  ];

  const financialPaths = [
    'Need-based Financial Assistance',
    'Interest-free Loans',
    'Work-Study Program',
  ];

  const deepDiveItems = [
    {
      number: '01',
      title: 'Institutional Partners',
      text: 'Strategic partnerships with leading institutions to ensure talented students from all backgrounds have access to GU TECH education.',
      icon: <Landmark size={24} />,
    },
    {
      number: '02',
      title: 'Need-based Financial Assistance',
      text: 'We offer full and partial financial assistance plans customized for families based on their documented financial needs.',
      icon: <ClipboardList size={24} />,
    },
    {
      number: '03',
      title: 'Interest-free Loans',
      text: 'Access to third-party interest-free education loans through our partner financial organizations to support your degree progression.',
      icon: <PiggyBank size={24} />,
    },
    {
      number: '04',
      title: 'Work-Study Program',
      text: 'Qualified students can take up on-campus employment opportunities in administrative and technical units to support their studies.',
      icon: <Users size={24} />,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Scholarships & Financial Aid"
        description="Supportive, prestigious, and clear financial pathways designed to empower future technology leaders."
        imageSrc="/about-hero-campus.png"
        locked={true}
        badge="50% Tuition Fee Off"
      />

      <main className="detail-sheet">
        <ScrollBlur>
          {/* Section 2: Mission Statement */}
          <section className="section bg-gradient-soft">
            <div className="container">
              <FadeUp className="mission-card">
                <div className="mission-card__accent" />
                <p className="mission-text">
                  GU TECH is dedicated to breaking down financial barriers and ensuring that
                  exceptional talent has the opportunity to thrive. We believe that financial
                  circumstances should not hinder potential, and our diverse range of
                  scholarships and assistance plans is designed to foster an inclusive and
                  thriving educational community.
                </p>
              </FadeUp>
            </div>
          </section>

          {/* Section 3: The Pathways */}
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow="Support Pathways"
                title="Types of Scholarships and Financial Assistance"
                description="We offer two distinct pathways to support our students throughout their academic journey."
                centered
              />

              <div className="pathways-grid">
                <FadeUp className="pathway-card card-3d">
                  <div className="pathway-card__header">
                    <div className="pathway-card__icon">
                      <GraduationCap size={32} />
                    </div>
                    <h3>Merit Scholarships</h3>
                  </div>
                  <ul className="pathway-list">
                    {meritPaths.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </FadeUp>

                <FadeUp className="pathway-card card-3d" delay={0.1}>
                  <div className="pathway-card__header">
                    <div className="pathway-card__icon">
                      <Handshake size={32} />
                    </div>
                    <h3>Financial Assistance Plans</h3>
                  </div>
                  <ul className="pathway-list">
                    {financialPaths.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* Section 4: Merit Scholarship Details */}
          <section className="section section--muted">
            <div className="container">
              <SectionHeading
                eyebrow="Academic Excellence"
                title="Rewarding Exceptional Performance"
                description="Our merit-based scholarships recognize high achievement at both the point of entry and throughout your degree."
              />

              <div className="merit-grid">
                <FadeUp className="merit-detail-card">
                  <h3>Admission Merit</h3>
                  <div className="merit-value">90% — 50%</div>
                  <p>Tuition fee waiver for incoming students based on high school/college performance and entrance test results.</p>
                  <div className="merit-note">
                    <p><em>* Terms and conditions apply. Percentage awarded depends on specific score brackets.</em></p>
                  </div>
                </FadeUp>

                <FadeUp className="merit-detail-card" delay={0.1}>
                  <h3>Admitted Students</h3>
                  <div className="merit-value">75% — 25%</div>
                  <p>Waivers awarded each semester based on maintaining a high GPA (e.g., 3.5 and above) during the program.</p>
                  <div className="merit-note alert-subtle">
                    <p>Official scholarship notifications are issued at the start of each academic cycle.</p>
                  </div>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* Section 5: Financial Assistance Deep-Dive */}
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow="Financial Support"
                title="Specialized Assistance Plans"
                description="Tailored support mechanisms to ensure financial continuity and peace of mind for our students."
                centered
              />

              <StaggerContainer className="deep-dive-grid">
                {deepDiveItems.map((item) => (
                  <StaggerItem key={item.number} className="deep-dive-card interact-hover">
                    <span className="deep-dive-bg-num">{item.number}</span>
                    <div className="deep-dive-card__icon">
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* Section 6: Final CTA */}
          <section className="section section--cta">
            <div className="container centered">
              <FadeUp>
                <Link className="button button--primary button--large mb-4" href={siteConfig.applyHref} target="_blank">
                  Apply Now
                </Link>
                <div className="mt-6">
                  <p className="text-muted">
                    Have questions? <Link href="/contact" className="link-underlined">Contact our Financial Aid Office</Link>
                  </p>
                </div>
              </FadeUp>
            </div>
          </section>
        </ScrollBlur>
      </main>
    </>
  );
}
