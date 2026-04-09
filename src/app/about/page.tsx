import MediaPanel from '@/components/site/MediaPanel';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { aboutPillars, createMetadata, homeMetrics } from '@/lib/site-data';

export const metadata = createMetadata(
  'About',
  'About GU TECH, academic mission, institutional values, and student-focused direction.',
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GU TECH"
        title="Technology education with purpose, structure, and professional outcomes."
        description="GU TECH is part of Al Ghazali University and is focused on building academic depth, practical capability, and long-term student growth."
        facts={homeMetrics}
        imageLabel="Campus and student life"
        imageSrc="/campus-hero.jpg"
        compact
      />

      <section className="section">
        <div className="container split-grid">
          <div className="surface program-card">
            <SectionHeading
              eyebrow="Institutional framing"
              title="A unified university experience for students and families."
              description="Programs, faculty, admissions, innovation, and executive learning are now presented in one coherent structure with cleaner route relationships."
            />
          </div>
          <MediaPanel
            label="Leadership and campus culture"
            src="/campus-hero.jpg"
            alt="GU TECH campus"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Design principles"
            title="What the website experience emphasizes."
            description="Each major section is tuned for readability, credibility, and practical navigation across desktop and mobile."
            centered
          />
          <div className="info-grid">
            {aboutPillars.map((pillar) => (
              <div key={pillar.title} className="info-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container surface program-card">
          <SectionHeading
            eyebrow="Institutional quote"
            title="A university website should feel academic, modern, and trustworthy at the same time."
            description="That balance is the central design objective here: strong typography, restrained animation, clean calls to action, and space for real images and future content additions."
          />
        </div>
      </section>
    </>
  );
}
