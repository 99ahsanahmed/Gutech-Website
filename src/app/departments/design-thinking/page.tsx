import DetailPage from '@/components/site/DetailPage';
import { createMetadata, getDepartment } from '@/lib/site-data';

const department = getDepartment('design-thinking');

export const metadata = createMetadata(
  'Design Thinking Resources',
  'Explore design thinking resources at GU TECH.',
);

export default function DesignThinkingPage() {
  return <DetailPage item={department!} eyebrow="Departments" subtitle="Resource hub" />;
}
