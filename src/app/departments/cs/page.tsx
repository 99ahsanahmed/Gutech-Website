import SubPageTemplate from '@/components/SubPageTemplate';

export default function DepCS() {
  return (
    <SubPageTemplate
      title="Computer Science"
      subtitle="Academic Department"
      heroContext="The central engine driving our computational theories, software architectures, and artificial intelligence pursuits."
      overview="The Department of Computer Science oversees the core infrastructure for all computing degrees. Our dedicated faculty operate at the nexus of hardware integration, cloud deployments, and theoretical computation. We manage the high-security labs and the core data stacks required to run our advanced academic modules."
      curriculumList={[
        'Management of Advanced AI Labs',
        'Faculty Governance for Computational Programs',
        'Industry Partnerships with Cloud Leaders',
        'Cybersecurity Operations Center'
      ]}
      imageCaption="Faculty researchers inside the primary High-Performance Computing cluster"
      isDepartment={true}
    />
  );
}
