import Link from 'next/link';

import MediaPanel from '@/components/site/MediaPanel';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import {
  admissionSupport,
  admissionsSteps,
  createMetadata,
  siteConfig,
} from '@/lib/site-data';

export const metadata = createMetadata(
  'Admissions',
  'Admissions, application steps, fee guidance, scholarships, and inquiry actions for GU TECH.',
);

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="A faster path from interest to application."
        description="The admissions page now combines process guidance, fee details, scholarships, and direct contact actions in one place so students do not have to search across the site."
        compact
      />

      <section className="section">
        <div className="container split-grid">
          <div className="surface program-card">
            <SectionHeading
              eyebrow="Process"
              title="How to apply"
              description="Built from the current admissions flow and simplified for quick reading."
            />
            <ol className="check-list">
              {admissionsSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <MediaPanel label="Admissions desk and student onboarding" src="/campus-hero.jpg" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Support"
            title="Fees, scholarships, and direct student help."
            description="The page is designed to remove uncertainty around the first steps of the admissions journey."
          />
          <div className="info-grid">
            <div className="info-card">
              <h3>Application and test fee</h3>
              <p>{siteConfig.feeAccount.applicationFee} via {siteConfig.feeAccount.bank}.</p>
              <p>Account title: {siteConfig.feeAccount.title}</p>
              <p>Account number: {siteConfig.feeAccount.number}</p>
            </div>
            {admissionSupport.map((item) => (
              <div key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container surface program-card">
          <SectionHeading
            eyebrow="Take action"
            title="Choose the quickest route."
            description="Every admissions page ends with clear next steps for application and support."
          />
          <div className="hero-actions">
            <a className="button button--primary" href={siteConfig.applyHref} rel="noreferrer" target="_blank">
              Apply now
            </a>
            <a className="button button--light" href={siteConfig.whatsappHref} rel="noreferrer" target="_blank">
              WhatsApp admissions
            </a>
            <Link className="button button--secondary" href="/contact">
              Submit inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
