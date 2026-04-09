import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function Faculty() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(26,26,26,1) 0%, rgba(139,24,29,0.9) 100%)', zIndex: 0 }} />
        <div className="hero-campus-layout flex flex-col items-center justify-center min-h-[50vh]">
          <FadeUp className="container text-center">
            <h1 className="uppercase text-5xl font-bold font-playfair mb-6">
              Our Guiding <span className="branded-highlight">Faculty</span>
            </h1>
            <p className="font-light text-xl max-w-3xl mx-auto opacity-95">
              World-class educators, industry pioneers, and groundbreaking researchers mapping the bleeding edge of their disciplines.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-white text-dark">
        <FadeUp className="container text-center">
          <h2 className="section-title">Distinguished Scholars</h2>
          <StaggerContainer className="grid mt-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <StaggerItem key={i} className="card text-center" style={{ padding: '2rem' }}>
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#eee', margin: '0 auto 1.5rem auto', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                   {/* Replace with next/image mapping real faculty later */}
                </div>
                <h3 className="card-title text-xl mb-1">Dr. Scholar Name</h3>
                <p className="text-primary font-medium text-sm mb-3 uppercase tracking-wider">Professor of Computer Science</p>
                <p className="card-text text-sm">
                  Specializing in Artificial Intelligence and advanced Machine Learning neural architectures in modern contexts.
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>
      </section>
    </>
  );
}
