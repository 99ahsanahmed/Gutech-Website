import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function News() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(26,26,26,1) 0%, rgba(139,24,29,0.9) 100%)', zIndex: 0 }} />
        <div className="hero-campus-layout flex flex-col items-center justify-center min-h-[50vh]">
          <FadeUp className="container">
            <h1 className="uppercase text-5xl font-bold font-playfair mb-6">News & Media</h1>
            <p className="font-light text-xl max-w-2xl mx-auto opacity-95">
              The latest breakthroughs, institutional updates, and student triumphs from the frontline of GU TECH.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section section-bg-light">
        <FadeUp className="container">
          <h2 className="section-title">Latest Headlines</h2>
          <StaggerContainer className="grid max-w-6xl mx-auto mt-8">
            <StaggerItem className="card p-0 overflow-hidden" style={{ padding: 0 }}>
               <div className="image-placeholder-large w-full" style={{ minHeight: '250px', borderRadius: '0', borderBottom: '1px solid #ddd' }}>[ Dr. Zeeshan Tarbiyah Session Image ]</div>
               <div style={{ padding: '2rem' }}>
                 <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Institutional Life</span>
                 <h3 className="card-title text-2xl font-playfair mb-3">Dr. Zeeshan hosts profound Tarbiyah Session</h3>
                 <p className="card-text mb-6">Dr. Zeeshan guided students through personal growth, ethics, and leadership in an intensely packed hall, marking a new chapter in GU TECH's holistic development cycles.</p>
                 <Link href="#" className="text-dark font-medium hover:text-primary transition-colors">Read Full Article &rarr;</Link>
               </div>
            </StaggerItem>
            
            <StaggerItem className="card p-0 overflow-hidden" style={{ padding: 0 }}>
               <div className="image-placeholder-large w-full" style={{ minHeight: '250px', borderRadius: '0', borderBottom: '1px solid #ddd' }}>[ Incubation Center Launch Image ]</div>
               <div style={{ padding: '2rem' }}>
                 <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Innovation</span>
                 <h3 className="card-title text-2xl font-playfair mb-3">I.I.C Secures Groundbreaking Seed Fund</h3>
                 <p className="card-text mb-6">The Innovation & Incubation Center successfully launches its initial seed fund mapping, providing high-risk capital directly to student-run technological ventures.</p>
                 <Link href="#" className="text-dark font-medium hover:text-primary transition-colors">Read Full Article &rarr;</Link>
               </div>
            </StaggerItem>
          </StaggerContainer>
        </FadeUp>
      </section>
    </>
  );
}
