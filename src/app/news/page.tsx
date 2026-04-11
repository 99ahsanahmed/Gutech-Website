import { createMetadata } from '@/lib/site-data';
import NewsHero from '@/components/site/NewsHero';
import MediaCorner from '@/components/site/MediaCorner';
import LatestUpdates from '@/components/site/LatestUpdates';
import ScrollBlur from '@/components/animations/ScrollBlur';

export const metadata = createMetadata(
  'News & Media',
  'Stay updated with the latest stories, achievements, and media coverage from GU TECH University.',
);

export default function NewsPage() {
  return (
    <main className="detail-sheet overflow-x-hidden">
      {/* Spotlight Section */}
      <ScrollBlur>
        <NewsHero />
      </ScrollBlur>

      {/* Media & Video Gallery */}
      <ScrollBlur>
        <MediaCorner />
      </ScrollBlur>

      {/* Unified News Feed */}
      <ScrollBlur>
        <LatestUpdates />
      </ScrollBlur>

      {/* Branding Spacer */}
      <div className="py-12 bg-gray-50/50" />
    </main>
  );
}
