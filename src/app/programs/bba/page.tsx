import DetailPage from '@/components/site/DetailPage';
import { createMetadata, getProgram } from '@/lib/site-data';

const program = getProgram('bba');

export const metadata = createMetadata('BBA', 'Explore the BBA program at GU TECH.');

export default function BBAPage() {
  return (
    <DetailPage
      item={program!}
      eyebrow="Programs"
      subtitle="Bachelor of Business Administration"
    />
  );
}
