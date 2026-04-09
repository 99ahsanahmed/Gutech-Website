import SubPageTemplate from '@/components/SubPageTemplate';

export default function BSCS() {
  return (
    <SubPageTemplate
      title="Computer Science"
      subtitle="Bachelors of Science (BS)"
      heroContext="A rigorous dive into algorithms, systems programming, and the foundational architectures behind modern computation."
      overview="The BS in Computer Science at GU TECH strips away the archaic boundaries of traditional programming degrees. Our intensive 4-year curriculum focuses squarely on the mathematical underpinnings of computer science while relentlessly forcing students into real-world, high-stakes coding environments. You won't just learn syntax—you will architect solutions."
      curriculumList={[
        'Data Structures & Advanced Algorithms',
        'Machine Learning & Neural Computations',
        'Cloud Distributed Systems & Security',
        'Quantum Computing Introduction',
        'Full-Stack Software Engineering Practicum'
      ]}
      imageCaption="Students debugging an advanced hardware cluster"
    />
  );
}
