import ContactForm from '@/components/site/ContactForm';
import MediaPanel from '@/components/site/MediaPanel';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { contactCards, createMetadata, siteConfig } from '@/lib/site-data';

export const metadata = createMetadata(
  'Contact',
  'Contact GU TECH through email, WhatsApp, or the inquiry form.',
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Direct routes into admissions and support."
        description="The contact page now combines official email, phone, WhatsApp, address, and a working inquiry form instead of leaving users to guess the next step."
        compact
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Direct contact"
            title="Email, WhatsApp, and campus information."
            description="These details were aligned to the current public GU TECH contact information and wrapped in a cleaner, faster layout."
          />
          <div className="info-grid">
            {contactCards.map((card) => (
              <a
                key={card.title}
                className="info-card"
                href={card.href}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                target={card.href.startsWith('http') ? '_blank' : undefined}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <p><strong>{card.value}</strong></p>
              </a>
            ))}
            <div className="info-card">
              <h3>Campus address</h3>
              <p>{siteConfig.campusLine}</p>
              <p><strong>{siteConfig.address}</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <ContactForm />
          <MediaPanel label="Replace with campus map, front desk, or student helpdesk image" />
        </div>
      </section>
    </>
  );
}
