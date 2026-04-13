import Link from 'next/link';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import ContactForm from '@/components/site/ContactForm';
import FadeUp from '@/components/animations/FadeUp';
import PageHero from '@/components/site/PageHero';
import { createMetadata, siteConfig } from '@/lib/site-data';

export const metadata = createMetadata(
  'Contact',
  'Contact GU TECH through email, WhatsApp, or the inquiry form.',
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We are here to help you start your journey."
        description="Reach out to us through any of the channels below. Our admissions team is ready to answer your questions about programs, fees, scholarships, and campus life."
        compact
      />

      <main className="home-sheet" style={{ paddingTop: '3rem' }}>
        {/* Contact Cards Section */}
        <section className="section" style={{ paddingTop: '1.5rem' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {/* Email Card */}
              <FadeUp>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="surface"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '0.85rem',
                    padding: '2rem 1.5rem',
                    borderRadius: '18px',
                    border: '1px solid var(--line)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(139, 24, 29, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand)',
                    }}
                  >
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 0.3rem', fontSize: '1.1rem', fontWeight: 700 }}>
                      Admissions Email
                    </h3>
                    <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                      For applications, fee receipts, test questions, and program guidance.
                    </p>
                  </div>
                  <strong style={{ color: 'var(--brand)', fontSize: '0.95rem' }}>
                    {siteConfig.email}
                  </strong>
                </a>
              </FadeUp>

              {/* WhatsApp Card */}
              <FadeUp delay={0.05}>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="surface"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '0.85rem',
                    padding: '2rem 1.5rem',
                    borderRadius: '18px',
                    border: '1px solid var(--line)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(37, 211, 102, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#25d366',
                    }}
                  >
                    <FaWhatsapp size={26} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 0.3rem', fontSize: '1.1rem', fontWeight: 700 }}>
                      WhatsApp Support
                    </h3>
                    <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                      Fastest route for fee receipt sharing and quick admissions follow-up.
                    </p>
                  </div>
                  <strong style={{ color: '#25d366', fontSize: '0.95rem' }}>
                    {siteConfig.phone}
                  </strong>
                </a>
              </FadeUp>

              {/* Phone Card */}
              <FadeUp delay={0.1}>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="surface"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '0.85rem',
                    padding: '2rem 1.5rem',
                    borderRadius: '18px',
                    border: '1px solid var(--line)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(139, 24, 29, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand)',
                    }}
                  >
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 0.3rem', fontSize: '1.1rem', fontWeight: 700 }}>
                      Call Us
                    </h3>
                    <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                      Speak directly with our admissions team during office hours.
                    </p>
                  </div>
                  <strong style={{ color: 'var(--brand)', fontSize: '0.95rem' }}>
                    {siteConfig.phone}
                  </strong>
                </a>
              </FadeUp>

              {/* Address Card */}
              <FadeUp delay={0.15}>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="surface"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '0.85rem',
                    padding: '2rem 1.5rem',
                    borderRadius: '18px',
                    border: '1px solid var(--line)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(139, 24, 29, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand)',
                    }}
                  >
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 0.3rem', fontSize: '1.1rem', fontWeight: 700 }}>
                      Campus Address
                    </h3>
                    <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                      {siteConfig.campusLine}
                    </p>
                  </div>
                  <strong style={{ color: 'var(--brand)', fontSize: '0.95rem' }}>
                    {siteConfig.address}
                  </strong>
                </a>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="section">
          <div className="container" style={{ maxWidth: '720px' }}>
            <FadeUp>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="eyebrow">Send an Inquiry</span>
                <h2
                  style={{
                    margin: '0.5rem 0 0.6rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  }}
                >
                  Have a question? We will get back to you.
                </h2>
                <p style={{ margin: 0, color: 'var(--ink-soft)', maxWidth: '50ch', marginInline: 'auto' }}>
                  Fill out the form below and our admissions team will respond within 24 hours.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <ContactForm />
            </FadeUp>
          </div>
        </section>

        {/* Google Maps Embed */}
        <section className="section" style={{ paddingBottom: '0' }}>
          <div className="container">
            <FadeUp>
              <div
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid var(--line)',
                  height: 'clamp(280px, 30vw, 400px)',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5259972825523!2d67.12045557591696!3d24.811711147179044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b6ffed4886f%3A0xb2a930b84b22c8c8!2sGU%20Tech!5e0!3m2!1sen!2s!4v1744570383792!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GU TECH Campus Location"
                />
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </>
  );
}
