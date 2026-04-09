import SubPageTemplate from '@/components/SubPageTemplate';

export default function DepDesignThinking() {
  return (
    <SubPageTemplate
      title="Design Thinking"
      subtitle="Operational & Academic Hub"
      heroContext="A centralized workshop dedicated to applying user-centric empathetic frameworks to impossible technical & business problems."
      overview="Design Thinking at GU TECH is not merely an aesthetic endeavor; it is a rigorous problem-solving architecture. This department acts as an internal consultation layer, bringing together engineers, business leaders, and artists to strip down friction and build holistic solutions using deeply human-centric methodologies."
      curriculumList={[
        'Empathetic User Research Labs',
        'Rapid Prototyping & UX Mapping',
        'Cross-Disciplinary Friction Workshops',
        'Product Lifecycle Acceleration'
      ]}
      imageCaption="Students clustering post-it notes during a rapid UX ideation sprint"
      isDepartment={true}
    />
  );
}
