import DetailPage from '@/components/site/DetailPage';
import { createMetadata, getDepartment } from '@/lib/site-data';

const department = getDepartment('iic');

export const metadata = createMetadata(
  'Innovation & Incubation Centre',
  'Explore the Innovation and Incubation Centre at GU TECH.',
);

export default function IICPage() {
  return <DetailPage item={department!} eyebrow="Departments" subtitle="Innovation unit" />;
}
