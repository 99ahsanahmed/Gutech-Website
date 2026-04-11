import Link from 'next/link';
import { Compass, GraduationCap, Laptop2, Network } from 'lucide-react';

import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { createMetadata, programs, siteConfig } from '@/lib/site-data';

export const metadata = createMetadata(
  'Programs',
  'Explore GU TECH undergraduate and graduate programs.',
);

export default function ProgramsPage() {
  const pathwayHighlights = [
    {
      icon: GraduationCap,
      title: 'Undergraduate and graduate routes',
      text: 'Current undergraduate pathways plus graduate tracks are presented in one coherent academic architecture.',
    },
    {
      icon: Laptop2,
      title: 'Applied and market-linked learning',
      text: 'Official program messaging emphasizes practical capability, technology fluency, and stronger employability outcomes.',
    },
    {
      icon: Network,
      title: 'Industry and innovation connectivity',
      text: 'Programs are linked with I.I.C, mentorship, and collaboration activity to support real-world exposure.',
    },
    {
      icon: Compass,
      title: 'Clear admissions handoff',
      text: 'Every pathway is designed with direct movement toward admissions support and inquiry channels.',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Programs designed for capability, character, and career progression."
        description="Explore GU TECH program pathways with stronger curriculum visibility, structured outcomes, and direct admissions routes."
        imageSrc="/about-story-session.png"
        imageAlt="GU TECH classroom and student learning"
        facts={[
          { label: 'Published offerings', value: 'BS CS, BBA, MS IBF' },
          { label: 'Graduate expansion', value: 'MS Data Science, MS Artificial Intelligence' },
          { label: 'Inquiry channels', value: 'WhatsApp, form, and admissions office' },
        ]}
        actions={[
          { label: 'Start admissions', href: '/admissions', variant: 'light' },
          {
            label: 'WhatsApp admissions',
            href: siteConfig.whatsappHref,
            variant: 'ghost',
            external: true,
          },
        ]}
        locked
      />

      <main className="detail-sheet">
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Program Catalog"
              title="Undergraduate and graduate offerings."
              description="Each program page now includes fuller academic framing, curriculum direction, and progression clarity."
            />
            <StaggerContainer className="program-grid">
              {programs.map((program) => (
                <StaggerItem key={program.slug} className="program-card card-3d">
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

        <section className="section home-section home-section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Learning Model"
              title="Why GU TECH program structure is stronger."
              description="Program delivery is framed around applied skills, innovation exposure, and values-led academic development."
              centered
            />
            <StaggerContainer className="info-grid">
              {pathwayHighlights.map((item) => (
                <StaggerItem className="info-card card-3d" key={item.title}>
                  <div className="feature-card__icon">
                    <item.icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
    </>
  );
}
