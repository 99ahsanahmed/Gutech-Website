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
  return (
    <>
      <PageHero
        eyebrow="Departments"
        title="Academic, innovation, and resource-driven units."
        description="The department section combines academic units with innovation and professional learning hubs in one clear structure."
        compact
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Departments and units"
            title="A structure built for growth."
            description="This setup lets the site support academic departments, strategic centers, and resource hubs without making the navigation feel fragmented."
          />
          <StaggerContainer className="program-grid">
            {departments.map((department) => (
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
