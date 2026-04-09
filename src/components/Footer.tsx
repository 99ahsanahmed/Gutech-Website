import Image from 'next/image';
import Link from 'next/link';

import { navigation, siteConfig } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="site-footer site-footer--flat">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/GU TECH logo.avif" alt="GU TECH" width={196} height={54} />
            <h2 className="footer-title">Build your future with confidence.</h2>
            <p>{siteConfig.tagline}</p>
          </div>

          <div className="footer-cta">
            <a className="button button--primary" href={siteConfig.applyHref} rel="noreferrer" target="_blank">
              Apply now
            </a>
            <a className="button button--secondary" href={siteConfig.whatsappHref} rel="noreferrer" target="_blank">
              WhatsApp admissions
            </a>
          </div>
        </div>

        <div className="footer-contact-strip">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replaceAll('-', '')}`}>{siteConfig.phone}</a>
          <span>{siteConfig.address}</span>
        </div>

        <div className="footer-grid">
          <div>
            <h3>Explore</h3>
            <div className="footer-links">
              {navigation.primary.slice(1).map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3>Programs</h3>
            <div className="footer-links">
              {navigation.programLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3>Quick actions</h3>
            <div className="footer-links">
              <Link href="/admissions">Scholarships and fees</Link>
              <Link href="/contact">Submit inquiry</Link>
              <Link href="/news">Latest updates</Link>
              <Link href="/faculty">Faculty directory</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} GU TECH. All rights reserved.</span>
          <div className="footer-socials">
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
