import FadeUp from '@/components/animations/FadeUp';
import Link from 'next/link';

interface SubPageTemplateProps {
  title: string;
  subtitle: string;
  heroContext: string;
  overview: string;
  curriculumList: string[];
  imageCaption: string;
  isDepartment?: boolean;
}

export default function SubPageTemplate({ title, subtitle, heroContext, overview, curriculumList, imageCaption, isDepartment = false }: SubPageTemplateProps) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(26,26,26,1) 0%, rgba(139,24,29,0.9) 100%)', zIndex: 0 }} />
        <div className="hero-campus-layout flex flex-col items-center justify-center min-h-[50vh]">
          <FadeUp className="container">
            <h1 className="uppercase text-5xl font-bold font-playfair mb-4">
              {title}
            </h1>
            <h2 className="text-2xl text-accent font-medium mb-6 tracking-wide uppercase">{subtitle}</h2>
            <p className="font-light text-xl max-w-3xl mx-auto opacity-95">
              {heroContext}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-white text-dark">
        <FadeUp className="container">
          <div className="split-section">
            <div className="flex-1">
              <h2 className="text-4xl font-playfair font-bold text-dark mb-6">Program Overview</h2>
              <p className="text-lg opacity-80 mb-6 font-light leading-relaxed">
                {overview}
              </p>
              
              <h3 className="text-2xl font-playfair font-bold text-dark mt-8 mb-4">Core Focus Areas</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', fontSize: '1.125rem', lineHeight: '1.8', opacity: 0.9 }}>
                {curriculumList.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.75rem' }}>{item}</li>
                ))}
              </ul>
              
              <Link href="/contact" className="btn btn-primary mt-4 uppercase text-sm tracking-wider">
                {isDepartment ? 'Contact Department' : 'Apply Now'}
              </Link>
            </div>
            <div className="flex-1 w-full relative">
              <div className="image-placeholder-large w-full">
                [ Image Placeholder: {imageCaption} ]
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
