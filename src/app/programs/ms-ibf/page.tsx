import SubPageTemplate from '@/components/SubPageTemplate';

export default function MSIBF() {
  return (
    <SubPageTemplate
      title="Islamic Banking & Finance"
      subtitle="Masters of Science (MS)"
      heroContext="Marrying deeply rooted ethical financial traditions with high-impact modern banking mechanisms."
      overview="In a rapidly financializing global market, ethical investment and shariah-compliant banking are no longer niche—they are foundational. Under the direct guidance of Vice Chancellor Mufti Ehsan Waquar and financial titans, this Master's program trains leaders to engineer complex, ethical financial products seamlessly integrated into global markets."
      curriculumList={[
        'Shariah-Compliant FinTech Innovations',
        'Global Macro-Economics & Islamic Principles',
        'Ethical Venture Capital & Structuring',
        'Risk Management in Islamic Banking',
        'Regulatory Frameworks for Modern Finance'
      ]}
      imageCaption="Scholars discussing Islamic financial charts inside the main library"
    />
  );
}
