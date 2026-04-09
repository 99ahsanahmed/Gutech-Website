import SubPageTemplate from '@/components/SubPageTemplate';

export default function DepContinuingEducation() {
  return (
    <SubPageTemplate
      title="Continuing Education"
      subtitle="External Educational Department"
      heroContext="Extending GU TECH's academic rigor well beyond standard degree cycles to accommodate lifelong learning mandates."
      overview="The modern professional landscape does not allow for intellectual staleness. The Department of Continuing Education manages all short-courses, bootcamp architectures, and community-led seminars. It ensures that alumni and external professionals have a conduit to the latest technological and strategic shifts."
      curriculumList={[
        'Professional Certification Administration',
        'Community Tech Bootcamps',
        'Alumni Reskilling Operations',
        'Weekend Specialized Summits'
      ]}
      imageCaption="Professionals engaged in an intense weekend coding bootcamp"
      isDepartment={true}
    />
  );
}
