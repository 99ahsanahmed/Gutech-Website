import SubPageTemplate from '@/components/SubPageTemplate';

export default function BBA() {
  return (
    <SubPageTemplate
      title="Business Administration"
      subtitle="Bachelors of Business Administration (BBA)"
      heroContext="Forging global entrepreneurs and corporate leaders through hard quantitative analytics and dynamic leadership frameworks."
      overview="The modern business landscape does not forgive hesitation. Our BBA program throws students into the deep end of global macroeconomics, venture capital structuring, and corporate analytics from day one. Taught by active industry titans, this degree is designed to turn calculated risks into structural empires."
      curriculumList={[
        'Financial Modeling & Quantitative Accounting',
        'Venture Capital & Early Stage Funding',
        'Organizational Psychology & Applied Leadership',
        'Global Information Systems & Analytics',
        'Strategic Macro-Economics'
      ]}
      imageCaption="Students reviewing high-level financial models in the strategy lab"
    />
  );
}
