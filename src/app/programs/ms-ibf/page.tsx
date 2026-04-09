import DetailPage from '@/components/site/DetailPage';
import { createMetadata, getProgram } from '@/lib/site-data';

const program = getProgram('ms-ibf');

export const metadata = createMetadata(
  'MS Islamic Banking & Finance',
  'Explore the MS Islamic Banking and Finance program at GU TECH.',
);

export default function MSIBFPage() {
  return <DetailPage item={program!} eyebrow="Programs" subtitle="Master of Science" />;
}
