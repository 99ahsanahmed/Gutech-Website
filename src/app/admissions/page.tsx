import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function Admissions() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(26,26,26,1) 0%, rgba(139,24,29,0.9) 100%)', zIndex: 0 }} />
        <div className="hero-campus-layout flex flex-col items-center justify-center min-h-[50vh]">
          <FadeUp className="container">
            <h1 className="uppercase text-5xl font-bold font-playfair mb-6">
              Admissions
            </h1>
            <p className="font-light text-xl max-w-2xl mx-auto opacity-95">
              Begin your journey at the intersection of prestigious tradition and hyper-modern innovation.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-white text-dark">
        <FadeUp className="container">
          <div className="split-section">
            <div className="flex-1">
              <h2 className="text-4xl font-playfair font-bold text-dark mb-6">Admission Process</h2>
              <p className="text-lg opacity-80 mb-6 font-light leading-relaxed">
                We seek passionate individuals ready to dive deep into Computer Science, Data Science, and Management. Our application process holistically evaluates your academic excellence, extracurricular impact, and raw drive to create.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', fontSize: '1.125rem', lineHeight: '1.8', opacity: 0.9 }}>
                <li style={{ marginBottom: '1rem' }}><strong>Online Application:</strong> Submit your comprehensive profile.</li>
                <li style={{ marginBottom: '1rem' }}><strong>GSAT:</strong> Complete the GU TECH Standard Admission Test.</li>
                <li style={{ marginBottom: '1rem' }}><strong>Interview:</strong> Meet with our esteemed Faculty Board.</li>
              </ul>
              <Link href="/contact" className="btn btn-outline">Apply for Undergraduate</Link>
            </div>
            <div className="flex-1 w-full relative">
              <div className="image-placeholder-large w-full">
                [ Image Placeholder: Graduate reading acceptance letter / Academic gates ]
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <section className="section section-bg-light">
        <FadeUp className="container text-center">
          <h2 className="section-title">Financing Your Future</h2>
          <p className="font-light text-xl max-w-3xl mx-auto opacity-80 mb-12">
            We believe an elite education must remain accessible. GU TECH provides comprehensive financial structuring and massive fully-funded opportunity grants.
          </p>
          <StaggerContainer className="grid max-w-5xl mx-auto text-left">
            <StaggerItem className="card">
              <h3 className="card-title text-2xl font-playfair mb-4">Fee Structure</h3>
              <p className="card-text mb-6">
                Our base fee frameworks are entirely transparent, with heavily flexible payment routing aligning directly with our "Earn As You Learn" incubators.
              </p>
              <Link href="/contact" className="text-primary font-medium hover:underline transition-colors duration-300">Download Handbook &rarr;</Link>
            </StaggerItem>
            <StaggerItem className="card">
              <h3 className="card-title text-2xl font-playfair mb-4">Scholarships & Aid</h3>
              <p className="card-text mb-6">
                Spearheaded by the Board of Governors and the One Nation Foundation, GU TECH maintains grants for leading academic outliers across the region.
              </p>
              <Link href="/contact" className="text-primary font-medium hover:underline transition-colors duration-300">View Financial Aid Options &rarr;</Link>
            </StaggerItem>
          </StaggerContainer>
        </FadeUp>
      </section>
    </>
  );
}
