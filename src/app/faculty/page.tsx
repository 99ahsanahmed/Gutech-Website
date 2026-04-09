import Image from 'next/image';

import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { createMetadata, facultyMembers } from '@/lib/site-data';

export const metadata = createMetadata(
  'Faculty',
  'Explore the faculty directory for GU TECH.',
);

export default function FacultyPage() {
  return (
    <>
      <PageHero
        eyebrow="Faculty"
        title="Visible academic leadership and stronger faculty presence."
        description="The faculty page now uses real names, better role labels, and actual media where available so the university appears more established and trustworthy."
        compact
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Faculty directory"
            title="The people behind the programs."
            description="Local faculty images already in the repo are used where possible, and the layout still works cleanly when an image is not yet available."
          />
          <div className="faculty-grid">
            {facultyMembers.map((member) => (
              <article key={member.name} className="faculty-card">
                {member.imageSrc ? (
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={640}
                    height={640}
                    className="faculty-photo"
                  />
                ) : (
                  <div className="faculty-photo faculty-photo--placeholder">
                    Image placeholder
                  </div>
                )}
                <span className="faculty-meta">{member.role}</span>
                <h3>{member.name}</h3>
                <p><strong>{member.school}</strong></p>
                <p>{member.expertise}</p>
                <p>{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
