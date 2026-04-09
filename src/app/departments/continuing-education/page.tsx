import DetailPage from '@/components/site/DetailPage';
import { createMetadata, getDepartment } from '@/lib/site-data';

const department = getDepartment('continuing-education');

export const metadata = createMetadata(
  'Continuing Education Programs',
  'Explore GU TECH continuing education programs.',
);

export default function ContinuingEducationPage() {
  return <DetailPage item={department!} eyebrow="Departments" subtitle="Professional learning unit" />;
}
