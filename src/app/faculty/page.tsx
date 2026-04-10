import Image from 'next/image';
import Link from 'next/link';

import FacultyWheel from '@/components/site/FacultyWheel';
import SectionHeading from '@/components/site/SectionHeading';
import { createMetadata, facultyDirectoryMembers } from '@/lib/site-data';

export const metadata = createMetadata(
  'Faculty',
  'Explore the faculty directory for GU TECH.',
);

export default function FacultyPage() {
  return (
    <>
      <section className="home-hero home-hero--locked faculty-page-hero">
        <Image
          src="/faculty-hero-group.jpg"
          alt="Faculty group portrait"
          fill
          priority
          className="home-hero__image"
          sizes="100vw"
        />
        <div className="home-hero__overlay" />
        <div className="home-hero__noise" />
        <div className="container home-hero__content faculty-page-hero__content">
          <div className="faculty-page-hero__copy">
            <h1>Visible academic leadership and stronger faculty presence.</h1>
            <p>
              A people-first faculty page with immersive presentation, clearer profiles, and
              stronger institutional credibility.
            </p>
            <div className="home-hero__actions">
              <Link className="button button--light" href="/contact">
                Talk to faculty office
              </Link>
              <Link className="button button--ghost" href="/programs">
                Explore programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="home-sheet faculty-page-sheet">
        <section className="section faculty-page-wheel">
          <div className="container">
            <SectionHeading
              eyebrow="Faculty directory"
              title="The people behind the programs."
              description="Faculty cards now use the same interactive wheel experience with a cleaner full-width presentation."
              centered
            />
            <FacultyWheel
              members={facultyDirectoryMembers}
              radiusDesktop={560}
              radiusMobile={320}
              className="faculty-wheel--directory"
              showSchool
            />
            <Link className="button button--primary faculty-page-wheel__button" href="/contact">
              Schedule a faculty consultation
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="container">
          <SectionHeading
            eyebrow="Academic profile"
            title="Faculty expertise anchored to program outcomes."
            description="Each profile is aligned with applied teaching, industry relevance, and student development across GU TECH pathways."
          />
          <div className="info-grid">
            <article className="info-card card-3d">
              <h3>Industry-ready teaching focus</h3>
              <p>Profiles emphasize applied instruction, project supervision, and employability outcomes.</p>
            </article>
            <article className="info-card card-3d">
              <h3>Cross-functional faculty strength</h3>
              <p>Faculty spans AI, software engineering, management, and institutional mentorship pathways.</p>
            </article>
            <article className="info-card card-3d">
              <h3>Consistent profile architecture</h3>
              <p>A unified visual system improves readability and trust for prospective students and parents.</p>
            </article>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}
