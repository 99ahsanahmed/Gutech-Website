import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function ProgramsRoot() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(26,26,26,1) 0%, rgba(139,24,29,0.9) 100%)', zIndex: 0 }} />
        <div className="hero-campus-layout flex flex-col items-center justify-center min-h-[50vh]">
          <FadeUp className="container">
            <h1 className="uppercase text-5xl font-bold font-playfair mb-6">Academic Programs</h1>
            <p className="font-light text-xl max-w-2xl mx-auto opacity-95">
              Explore our intensive undergraduate and graduate architectures.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-white text-dark">
        <FadeUp className="container">
          <h2 className="section-title">Undergraduate Core</h2>
          <StaggerContainer className="grid max-w-6xl mx-auto mt-8">
            <StaggerItem className="card">
              <div className="text-4xl font-playfair font-bold text-dark mb-4">BS</div>
              <h3 className="card-title text-2xl mb-3">Computer Science</h3>
              <p className="card-text mb-6">A rigorous dive into algorithms, systems programming, and modern software architectures.</p>
              <Link href="/programs/bs-cs" className="text-primary hover:underline font-bold">View Curriculum &rarr;</Link>
            </StaggerItem>
            <StaggerItem className="card">
              <div className="text-4xl font-playfair font-bold text-dark mb-4">BBA</div>
              <h3 className="card-title text-2xl mb-3">Business Administration</h3>
              <p className="card-text mb-6">Forging global entrepreneurs with hard quantitative metrics and leadership soft skills.</p>
              <Link href="/programs/bba" className="text-primary hover:underline font-bold">View Curriculum &rarr;</Link>
            </StaggerItem>
          </StaggerContainer>
        </FadeUp>
      </section>

      <section className="section section-bg-light">
        <FadeUp className="container">
          <h2 className="section-title">Postgraduate Masters</h2>
          <StaggerContainer className="grid max-w-6xl mx-auto mt-8 text-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <StaggerItem className="card shadow-lg" style={{ borderTop: '4px solid var(--primary-red)' }}>
              <div className="text-4xl font-playfair font-bold text-primary mb-4">MS</div>
              <h3 className="card-title text-2xl mb-6 text-dark" style={{ minHeight: '60px' }}>Data Science</h3>
              <Link href="/programs/ms-ds" className="btn btn-outline text-sm w-full block">Explore MS DS</Link>
            </StaggerItem>
            <StaggerItem className="card shadow-lg" style={{ borderTop: '4px solid var(--primary-red)' }}>
              <div className="text-4xl font-playfair font-bold text-primary mb-4">MS</div>
              <h3 className="card-title text-2xl mb-6 text-dark" style={{ minHeight: '60px' }}>Artificial Intelligence</h3>
              <Link href="/programs/ms-ai" className="btn btn-outline text-sm w-full block">Explore MS AI</Link>
            </StaggerItem>
            <StaggerItem className="card shadow-lg" style={{ borderTop: '4px solid var(--primary-red)' }}>
              <div className="text-4xl font-playfair font-bold text-primary mb-4">MS</div>
              <h3 className="card-title text-2xl mb-6 text-dark" style={{ minHeight: '60px' }}>Islamic Banking & Finance</h3>
              <Link href="/programs/ms-ibf" className="btn btn-outline text-sm w-full block">Explore MS IBF</Link>
            </StaggerItem>
          </StaggerContainer>
        </FadeUp>
      </section>
    </>
  );
}
