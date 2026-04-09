import DetailPage from '@/components/site/DetailPage';
import { createMetadata, getProgram } from '@/lib/site-data';

const program = getProgram('ms-ds');

export const metadata = createMetadata(
  'MS Data Science',
  'Explore the MS Data Science graduate track at GU TECH.',
);

export default function MSDSPage() {
  return <DetailPage item={program!} eyebrow="Programs" subtitle="Graduate track" />;
}
