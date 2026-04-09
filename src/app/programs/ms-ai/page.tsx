import DetailPage from '@/components/site/DetailPage';
import { createMetadata, getProgram } from '@/lib/site-data';

const program = getProgram('ms-ai');

export const metadata = createMetadata(
  'MS Artificial Intelligence',
  'Explore the MS Artificial Intelligence graduate track at GU TECH.',
);

export default function MSAIPage() {
  return <DetailPage item={program!} eyebrow="Programs" subtitle="Graduate track" />;
}
