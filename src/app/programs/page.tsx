import Link from 'next/link';

import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { createMetadata, programs } from '@/lib/site-data';

export const metadata = createMetadata(
  'Programs',
  'Explore GU TECH undergraduate and graduate programs.',
);

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Academic programs with clear pathways and outcomes."
        description="The programs section presents undergraduate and graduate routes with direct links to admissions, departments, and student support."
        compact
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="All programs"
            title="Undergraduate and graduate offerings."
            description="Each program page is built as a complete academic overview instead of a brief summary block."
          />
          <StaggerContainer className="program-grid">
            {programs.map((program) => (
              <StaggerItem key={program.slug} className="program-card">
                <span className="program-card__meta">{program.category}</span>
                <h3>{program.title}</h3>
                <p>{program.summary}</p>
                <Link className="button button--primary" href={`/programs/${program.slug}`}>
                  Open page
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
