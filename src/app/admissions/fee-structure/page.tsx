import PageHero from '@/components/site/PageHero';
import FeeStructure from '@/components/site/FeeStructure';
import ScrollBlur from '@/components/animations/ScrollBlur';

export const metadata = {
  title: 'Fee Structure | Admissions | GU TECH',
  description: 'Detailed fee schedules, refund policies, and payment instructions for GU TECH programs.',
};

export default function FeeStructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="GU Tech Fee Structure"
        description="Transparent financial pathways for technology leaders."
        imageSrc="/admissions-hero-section.avif"
        locked={true}
      />
      
      <main className="detail-sheet">
        <ScrollBlur>
          <FeeStructure />
        </ScrollBlur>
      </main>
    </>
  );
}
