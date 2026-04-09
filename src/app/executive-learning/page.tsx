import Link from 'next/link';

import MediaPanel from '@/components/site/MediaPanel';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { createMetadata, executiveLearningTracks } from '@/lib/site-data';

export const metadata = createMetadata(
  'Executive Learning',
  'Executive learning, professional development, and short-course positioning for GU TECH.',
);

export default function ExecutiveLearningPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive Learning"
        title="Short-format learning for leaders, teams, and professionals."
        description="Executive learning includes certificate pathways, short courses, corporate cohorts, and practical upskilling modules."
        compact
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Tracks"
            title="Executive learning tracks"
            description="These blocks are structured so you can later attach schedules, fees, and registration links without changing the page design."
          />
          <div className="info-grid">
            {executiveLearningTracks.map((track) => (
              <div key={track.title} className="info-card">
                <h3>{track.title}</h3>
                <p>{track.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <MediaPanel label="Executive classroom and workshop sessions" src="/executive-hero.jpg" />
          <div className="surface program-card">
            <SectionHeading
              eyebrow="Connected pages"
              title="Designed to work with continuing education and industry outreach."
              description="Executive learning now connects cleanly to continuing education, design thinking resources, and the main contact and inquiry flow."
            />
            <div className="hero-actions">
              <Link className="button button--primary" href="/departments/continuing-education">
                Continuing education
              </Link>
              <Link className="button button--light" href="/contact">
                Request a brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

