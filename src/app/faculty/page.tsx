import Image from 'next/image';
import Link from 'next/link';

import FacultyWheel from '@/components/site/FacultyWheel';
import SectionHeading from '@/components/site/SectionHeading';
import FadeUp from '@/components/animations/FadeUp';
import { createMetadata, facultyDirectoryMembers } from '@/lib/site-data';

export const metadata = createMetadata(
  'Faculty',
  'Explore the faculty directory for GU TECH.',
);

export default function FacultyPage() {
  return (
    <>
      <section className="sticky top-0 h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#0A0A0C] z-0 pt-20 pb-0">
        <div className="absolute inset-0 z-0">
          {/* Subtle Ambient Glowing Orbs - Switched to radial gradients to eliminate CSS blur lag */}
          <div className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,rgba(139,24,29,0.15)_0%,transparent_60%)] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[0%] -left-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(139,24,29,0.12)_0%,transparent_60%)] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
          
          {/* Cinematic Cinematic Noise Texture */}
          <div className="home-hero__noise opacity-40 mix-blend-overlay" />
          
          {/* Vignette Edge Bleed to blend with the sliding white content */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-transparent to-[#111217]/80" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-8 mt-12">
          <FadeUp className="max-w-4xl">
            <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/50 mb-6 inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-brand"></div>
              Academic Leadership
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5rem] tracking-tight leading-[1.05] mb-8 text-white drop-shadow-lg">
              Visible academic leadership and <span className="text-brand italic pr-2">stronger faculty</span> presence.
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-[1.7] max-w-2xl mb-12">
              A people-first faculty page with immersive presentation, clearer profiles, and stronger institutional credibility.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-8 text-sm font-semibold text-charcoal transition-all hover:bg-gray-100">
                Talk to faculty office
              </Link>
              <Link href="/programs" className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 bg-white/5 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 backdrop-blur-sm">
                Explore programs
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <main className="home-sheet relative z-10 faculty-page-sheet">
        <section className="section faculty-page-wheel">
          <div className="container">
            <SectionHeading
              eyebrow="Faculty directory"
              title="The people behind the programs."
              description="Click any faculty card to open a full-screen profile with academic background, focus areas, and a richer institutional summary."
              centered
            />
            <FacultyWheel
              members={facultyDirectoryMembers}
              radiusDesktop={820}
              radiusMobile={640}
              className="faculty-wheel--directory"
              showSchool
            />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <Link className="button button--primary faculty-page-wheel__button" href="/contact">
                Schedule a faculty consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
          <SectionHeading
            eyebrow="Academic profile"
            title="Faculty expertise anchored to program outcomes."
            description="Each profile is aligned with applied teaching, industry relevance, and student development across GU TECH pathways."
          />
          <div className="info-grid">
            <article className="info-card card-3d">
              <h3>Industry-ready teaching focus</h3>
              <p>Profiles emphasize applied instruction, project supervision, and employability outcomes.</p>
            </article>
            <article className="info-card card-3d">
              <h3>Cross-functional faculty strength</h3>
              <p>Faculty spans AI, software engineering, management, and institutional mentorship pathways.</p>
            </article>
            <article className="info-card card-3d">
              <h3>Consistent profile architecture</h3>
              <p>A unified visual system improves readability and trust for prospective students and parents.</p>
            </article>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}
