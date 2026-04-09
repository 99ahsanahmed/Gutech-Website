import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';

export default function ExecutiveLearning() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(26,26,26,1) 0%, rgba(139,24,29,0.9) 100%)', zIndex: 0 }} />
        <div className="hero-campus-layout flex flex-col items-center justify-center min-h-[50vh]">
          <FadeUp className="container">
            <h1 className="uppercase text-5xl font-bold font-playfair mb-6">Executive Learning</h1>
            <p className="font-light text-xl max-w-2xl mx-auto opacity-95">
              Transformative programs designed specifically for senior leadership and active industry professionals.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-white text-dark">
        <FadeUp className="container">
          <div className="split-section">
            <div className="flex-1">
              <h2 className="text-4xl font-playfair font-bold text-dark mb-6">Upskill at the Edge</h2>
              <p className="text-lg opacity-80 mb-6 font-light leading-relaxed">
                As technology rapidly displaces traditional business constructs, executive resilience must be forged through continuous, high-impact education. GU TECH offers hyper-focused short courses, certifications, and masterclasses directed by global industry pioneers.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', fontSize: '1.125rem', lineHeight: '1.8', opacity: 0.9 }}>
                <li style={{ marginBottom: '1rem' }}><strong>Weekend Modalities:</strong> Fit rigorous learning around demanding global schedules.</li>
                <li style={{ marginBottom: '1rem' }}><strong>Peer Networking:</strong> Interface with C-Suite cohorts from the region's top unicorns.</li>
                <li style={{ marginBottom: '1rem' }}><strong>Corporate Tailoring:</strong> Custom curriculums developed directly alongside your HR board.</li>
              </ul>
              <Link href="/contact" className="btn btn-primary mt-2">Request Corporate Brochure</Link>
            </div>
            <div className="flex-1 w-full relative">
              <div className="image-placeholder-large w-full">
                [ Image Placeholder: Executives collaborating in modern boardroom ]
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
