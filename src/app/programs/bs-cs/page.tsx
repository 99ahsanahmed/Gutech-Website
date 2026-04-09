import DetailPage from '@/components/site/DetailPage';
import { createMetadata, getProgram } from '@/lib/site-data';

const program = getProgram('bs-cs');

export const metadata = createMetadata(
  'BS Computer Science',
  'Explore the BS Computer Science program at GU TECH.',
);

export default function BSCSPage() {
  return <DetailPage item={program!} eyebrow="Programs" subtitle="Bachelor of Science" />;
}
