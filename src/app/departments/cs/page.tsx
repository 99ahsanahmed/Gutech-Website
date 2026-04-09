import DetailPage from '@/components/site/DetailPage';
import { createMetadata, getDepartment } from '@/lib/site-data';

const department = getDepartment('cs');

export const metadata = createMetadata(
  'Department of Computer Science',
  'Explore the Department of Computer Science at GU TECH.',
);

export default function ComputerScienceDepartmentPage() {
  return <DetailPage item={department!} eyebrow="Departments" subtitle="Academic department" />;
}
