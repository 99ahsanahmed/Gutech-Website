import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function DepartmentsRoot() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(26,26,26,1) 0%, rgba(139,24,29,0.9) 100%)', zIndex: 0 }} />
        <div className="hero-campus-layout flex flex-col items-center justify-center min-h-[50vh]">
          <FadeUp className="container">
            <h1 className="uppercase text-5xl font-bold font-playfair mb-6">Our Departments</h1>
            <p className="font-light text-xl max-w-2xl mx-auto opacity-95">
              The internal engines of GU TECH's academic and operational brilliance.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-white text-dark">
        <FadeUp className="container">
          <h2 className="section-title">Academic & Operational Wings</h2>
          <StaggerContainer className="grid max-w-6xl mx-auto mt-8">
            <StaggerItem className="card flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 className="card-title text-2xl font-playfair mb-2">Computer Science</h3>
                <p className="card-text text-sm">Fostering top-tier computational theorists.</p>
              </div>
              <Link href="/departments/cs" className="text-primary hover:text-dark font-bold text-2xl">&rarr;</Link>
            </StaggerItem>
            <StaggerItem className="card flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 className="card-title text-2xl font-playfair mb-2">Management Sciences</h3>
                <p className="card-text text-sm">Building ethical business leaders.</p>
              </div>
              <Link href="/departments/management-sciences" className="text-primary hover:text-dark font-bold text-2xl">&rarr;</Link>
            </StaggerItem>
            <StaggerItem className="card flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 className="card-title text-2xl font-playfair mb-2">Design Thinking</h3>
                <p className="card-text text-sm">Empathetic frameworks for modern problem solving.</p>
              </div>
              <Link href="/departments/design-thinking" className="text-primary hover:text-dark font-bold text-2xl">&rarr;</Link>
            </StaggerItem>
            <StaggerItem className="card flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 className="card-title text-2xl font-playfair mb-2">Continuing Education</h3>
                <p className="card-text text-sm">Lifelong learning paradigms.</p>
              </div>
              <Link href="/departments/continuing-education" className="text-primary hover:text-dark font-bold text-2xl">&rarr;</Link>
            </StaggerItem>
            <StaggerItem className="card flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '4px solid var(--primary-red)' }}>
              <div>
                <h3 className="card-title text-2xl font-playfair mb-2">I.I.C</h3>
                <p className="card-text text-sm">Innovation & Incubation Center</p>
              </div>
              <Link href="/departments/iic" className="text-primary hover:text-dark font-bold text-2xl">&rarr;</Link>
            </StaggerItem>
          </StaggerContainer>
        </FadeUp>
      </section>
    </>
  );
}
