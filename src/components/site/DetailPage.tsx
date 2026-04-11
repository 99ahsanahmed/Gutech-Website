import Link from 'next/link';

import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import CurriculumAccordion from '@/components/site/CurriculumAccordion';
import MediaPanel from '@/components/site/MediaPanel';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import type { Department, Program } from '@/lib/site-data';

type DetailPageProps = {
  item: Program | Department;
  eyebrow: string;
  subtitle: string;
};

export default function DetailPage({
  item,
  eyebrow,
  subtitle,
}: DetailPageProps) {
  const visibleSections =
    'curriculum' in item && item.curriculum?.length
      ? item.sections.filter((section) => !/(curriculum|semester)/i.test(section.title))
      : item.sections;

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={item.title}
        description={item.description}
        badge={item.badge}
        imageLabel={item.imageLabel}
        imageSrc={item.imageSrc}
        facts={item.facts}
        actions={[
          { label: 'Contact admissions', href: '/contact', variant: 'light' },
          { label: 'View admissions', href: '/admissions', variant: 'ghost' },
        ]}
        locked
      />

      <main className="detail-sheet">
        <section className="section">
          <div className="container detail-layout">
            <div className="detail-main">
              <SectionHeading
                eyebrow={subtitle}
                title="Overview"
                description={item.overview}
              />

              {'curriculum' in item && item.curriculum?.length ? (
                <div className="surface section-card curriculum-shell">
                  <h3>Semester-wise curriculum</h3>
                  <p>
                    Open each semester to review course codes, titles, core area tags, and credit
                    hours.
                  </p>
                  <CurriculumAccordion semesters={item.curriculum} />
                </div>
              ) : null}

              <StaggerContainer className="detail-sections">
                {visibleSections.map((section) => (
                  <StaggerItem key={section.title} className="surface section-card">
                    <h3>{section.title}</h3>
                    <ul className="check-list">
                      {section.items.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <FadeUp className="detail-side">
              <MediaPanel label={item.imageLabel} src={item.imageSrc} alt={item.title} />
              <div className="surface detail-links">
                <h3>Explore next</h3>
                <div className="link-stack">
                  {item.links.map((link) =>
                    link.external ? (
                      <a
                        key={link.label}
                        className="link-card"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{link.label}</span>
                        <strong>Open</strong>
                      </a>
                    ) : (
                      <Link key={link.label} className="link-card" href={link.href}>
                        <span>{link.label}</span>
                        <strong>Open</strong>
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </>
  );
}
