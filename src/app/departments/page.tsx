import Link from 'next/link';

import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { createMetadata, departments } from '@/lib/site-data';

export const metadata = createMetadata(
  'Departments',
  'Explore GU TECH departments, innovation units, and learning resource hubs.',
);

export default function DepartmentsPage() {
  const highlightedDepartments = departments.filter(
    (department) => department.slug === 'design-thinking' || department.slug === 'iic',
  );

  return (
    <>
      <PageHero
        eyebrow="Departments"
        title="Innovation-focused departments and strategic units."
        description="This section now focuses on GU TECH's two signature units for innovation execution and applied problem-solving."
        compact
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Departments and units"
            title="Focused, high-impact institutional units."
            description="Design Thinking Resources and I.I.C are surfaced as the priority department experiences in the current site architecture."
          />
          <StaggerContainer className="program-grid">
            {highlightedDepartments.map((department) => (
              <StaggerItem key={department.slug} className="program-card">
                <span className="program-card__meta">{department.type}</span>
                <h3>{department.title}</h3>
                <p>{department.summary}</p>
                <Link
                  className="button button--primary"
                  href={`/departments/${department.slug}`}
                >
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
