import SubPageTemplate from '@/components/SubPageTemplate';

export default function DepIIC() {
  return (
    <SubPageTemplate
      title="Innovation & Incubation Centre"
      subtitle="The Startup Backbone (I.I.C)"
      heroContext="Our premier venture-building sandbox providing necessary capital, mentorship, and operational support to exceptional students."
      overview="The I.I.C is arguably the most dynamic sector of GU TECH. Rather than waiting for graduation, students actively pitch models to internal venture boards. Winners are brought into the I.I.C, granted seed funding, legal incorporation support, and direct access to C-level mentors from the immediate industry."
      curriculumList={[
        'Series-Seed Capital Grants',
        'Legal & Incorporation Support Staff',
        'Product-Market Fit Incubation Sprints',
        'Executive Mentorship Cohorts'
      ]}
      imageCaption="Whiteboards glowing during an intense late-night I.I.C strategy mapping"
      isDepartment={true}
    />
  );
}
