import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { createMetadata, newsItems, siteConfig } from '@/lib/site-data';

export const metadata = createMetadata(
  'News',
  'News and media coverage for GU TECH, including institutional updates and social-ready content.',
);

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News and Media"
        title="Public updates, events, and partnerships."
        description="The news section is structured to support institutional stories, event updates, partnership announcements, and social amplification."
        compact
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Latest coverage"
            title="Built for website updates and social distribution."
            description="The cards below can later connect to automated posting, category filters, and social embeds without changing the visual system."
          />
          <div className="news-grid">
            {newsItems.map((item) => (
              <article key={item.title} className="news-card">
                <span className="news-meta">
                  {item.category}  -  {item.dateLabel}
                </span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p><strong>{item.channel}</strong></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container surface program-card">
          <SectionHeading
            eyebrow="Social links"
            title="Ready for LinkedIn, Facebook, Instagram, and YouTube."
            description="Official channels are linked directly from the current public university presence."
          />
          <div className="hero-actions">
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                className="button button--primary"
                href={social.href}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

