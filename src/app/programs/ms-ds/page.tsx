import SubPageTemplate from '@/components/SubPageTemplate';

export default function MSDS() {
  return (
    <SubPageTemplate
      title="Data Science"
      subtitle="Masters of Science (MS)"
      heroContext="Harnessing the era of big data through advanced predictive analytics, neural networking, and statistical modeling."
      overview="The MS in Data Science is arguably our most intensive postgraduate offering. We bypass introductory analytics and thrust scholars directly into the deployment of large-scale predictive models, deep learning architectures, and big data infrastructure. You will learn to manipulate the data sets that drive global decision-making."
      curriculumList={[
        'Deep Learning & Neural Architectures',
        'Natural Language Processing (NLP)',
        'Big Data Infrastructure (Hadoop/Spark)',
        'Predictive Statistical Modeling',
        'Ethical A.I. Development'
      ]}
      imageCaption="Data scientists analyzing massive volumetric data graphs"
    />
  );
}
