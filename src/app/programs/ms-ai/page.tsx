import SubPageTemplate from '@/components/SubPageTemplate';

export default function MSAI() {
  return (
    <SubPageTemplate
      title="Artificial Intelligence"
      subtitle="Masters of Science (MS)"
      heroContext="Commanding the bleeding edge of generalized algorithms, machine autonomy, and neural networks."
      overview="We are on the precipice of the intelligence revolution. The MS in Artificial Intelligence connects graduates directly with leading AI labs across the world. Our curriculum ignores industry lag and focuses entirely on tomorrow—reinforcement learning, autonomous vehicle routing, and generative AI structuring."
      curriculumList={[
        'Advanced Reinforcement Learning',
        'Computer Vision & Autonomy',
        'Generative Artificial Intelligence',
        'Robotics and Sensory Networks',
        'Philosophy & Ethics of Artificial General Intelligence'
      ]}
      imageCaption="Robotics and autonomous systems laboratory"
    />
  );
}
