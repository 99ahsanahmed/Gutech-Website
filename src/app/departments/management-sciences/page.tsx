import SubPageTemplate from '@/components/SubPageTemplate';

export default function DepManagementSciences() {
  return (
    <SubPageTemplate
      title="Management Sciences"
      subtitle="Academic Department"
      heroContext="The strategic division responsible for integrating ethical frameworks with modern corporate governance."
      overview="The Department of Management Sciences is dedicated to synthesizing quantitative economics with qualitative leadership frameworks. By housing both the BBA and Executive branches, the department serves as an incubator for corporate case studies, financial modeling, and global market analyses."
      curriculumList={[
        'Global Markets Research Unit',
        'Corporate Ethics & Governance Board',
        'Venture Capital Outreach Strategies',
        'Macro-Economic Analytics Seminars'
      ]}
      imageCaption="Leadership colloquium inside the main executive hall"
      isDepartment={true}
    />
  );
}
