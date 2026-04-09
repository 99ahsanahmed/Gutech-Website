import DetailPage from '@/components/site/DetailPage';
import { createMetadata, getDepartment } from '@/lib/site-data';

const department = getDepartment('management-sciences');

export const metadata = createMetadata(
  'Department of Management Sciences',
  'Explore the Department of Management Sciences at GU TECH.',
);

export default function ManagementSciencesDepartmentPage() {
  return <DetailPage item={department!} eyebrow="Departments" subtitle="Academic department" />;
}
