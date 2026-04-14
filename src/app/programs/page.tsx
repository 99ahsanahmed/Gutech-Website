import Link from 'next/link';
import Image from 'next/image';
import { Compass, GraduationCap, Laptop2, Network, ArrowRight, Building2, Fingerprint, Handshake, Hexagon, Pentagon, PieChart, TerminalSquare, Cpu, Box } from 'lucide-react';

import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import SectionHeading from '@/components/site/SectionHeading';
import { createMetadata, programs, siteConfig } from '@/lib/site-data';

export const metadata = createMetadata(
  'Programs',
  'Explore GU TECH undergraduate and graduate programs.',
);

const programTheme: Record<string, any> = {
  'bs-cs': {
    watermark: Hexagon,
    icon: TerminalSquare,
    bgClass: 'bg-white border-[#262626]/20 hover:border-[#262626]/50',
    textClass: 'text-charcoal',
    badgeText: 'text-charcoal/40',
    badgeDot: 'bg-brand/40',
    descClass: 'text-charcoal/70',
    btnClass: 'text-brand group-hover:text-charcoal',
    theme: 'light',
  },
  'bba': {
    watermark: PieChart,
    icon: Handshake,
    bgClass: 'bg-[#fafafa] border-[#262626]/20 hover:border-[#262626]/50',
    textClass: 'text-charcoal',
    badgeText: 'text-charcoal/40',
    badgeDot: 'bg-brand/40',
    descClass: 'text-charcoal/70',
    btnClass: 'text-brand group-hover:text-charcoal',
    theme: 'light',
  },
  'ms-ibf': {
    watermark: Pentagon,
    icon: Building2,
    bgClass: 'bg-charcoal border-[#262626] hover:border-brand/80 text-white',
    textClass: 'text-white',
    badgeText: 'text-white/40',
    badgeDot: 'bg-white/20',
    descClass: 'text-white/70',
    btnClass: '!text-[#efefef] group-hover:!text-brand',
    theme: 'dark',
  },
  'ms-ds': {
    watermark: Fingerprint,
    icon: Network,
    bgClass: 'bg-[#1a1a1a] border-[#262626] hover:border-brand/80 text-white',
    textClass: 'text-white',
    badgeText: 'text-white/40',
    badgeDot: 'bg-white/20',
    descClass: 'text-white/70',
    btnClass: '!text-[#efefef] group-hover:!text-brand',
    theme: 'dark',
  },
  'ms-ai': {
    watermark: Box,
    icon: Cpu,
    bgClass: 'bg-[#0f0f0f] border-[#262626] hover:border-brand/80 text-white',
    textClass: 'text-white',
    badgeText: 'text-white/40',
    badgeDot: 'bg-white/20',
    descClass: 'text-white/70',
    btnClass: '!text-[#efefef] group-hover:!text-brand',
    theme: 'dark',
  }
};

export default function ProgramsPage() {
  const pathwayHighlights = [
    {
      icon: GraduationCap,
      title: 'Undergraduate and graduate routes',
      text: 'Current undergraduate pathways plus graduate tracks are presented in one coherent academic architecture.',
    },
    {
      icon: Laptop2,
      title: 'Applied and market-linked learning',
      text: 'Official program messaging emphasizes practical capability, technology fluency, and stronger employability outcomes.',
    },
    {
      icon: Network,
      title: 'Industry and innovation connectivity',
      text: 'Programs are linked with I.I.C, mentorship, and collaboration activity to support real-world exposure.',
    },
    {
      icon: Compass,
      title: 'Clear admissions handoff',
      text: 'Every pathway is designed with direct movement toward admissions support and inquiry channels.',
    },
  ];

  return (
    <>
      {/* New Spaced-Out Tailwind Hero */}
      <section className="sticky top-0 h-[100svh] w-full flex items-center overflow-hidden bg-charcoal pt-24 pb-12 z-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-story-session.png"
            alt="GU TECH classroom and student learning"
            fill
            priority
            className="object-cover opacity-20 mix-blend-luminosity brightness-75 transition-transform duration-[2000ms] scale-100 hover:scale-[1.02]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14161e] via-[#14161e]/90 to-brand/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-[#111217]/50 to-transparent" />
        </div>
        
        {/* Main Hero Copy */}
        <div className="container relative z-10 px-4 md:px-8">
          <FadeUp className="max-w-4xl">
            <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/50 mb-6 inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-brand"></div>
              Academic Pathways
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 text-white drop-shadow-lg">
              Programs designed for <span className="text-brand italic pr-4">capability, character,</span> and career progression.
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-[1.7] max-w-2xl mb-12">
              Explore GU TECH program pathways with stronger curriculum visibility, structured outcomes, and direct admissions routes.
            </p>
          </FadeUp>
        </div>
      </section>

      <main className="home-sheet">
        <section className="section py-24 md:py-32">
          <div className="container">
            <SectionHeading
              eyebrow="Program Catalog"
              title="Undergraduate and graduate offerings."
              description="Each program page includes full academic framing, curriculum direction, and progression clarity."
            />
            
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {programs.map((program) => {
                const themeInfo = programTheme[program.slug] || programTheme['bs-cs'];
                const Watermark = themeInfo.watermark;
                const MainIcon = themeInfo.icon;
                
                return (
                  <StaggerItem 
                    key={program.slug} 
                    className={`group border p-10 md:p-12 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col relative overflow-hidden hover:-translate-y-2 lg:col-span-2 ${themeInfo.bgClass}`}
                  >
                     {themeInfo.theme === 'dark' && (
                       <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                     )}
                     
                     <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-[.bg-charcoal]:opacity-[0.05] group-[.bg-\[\#1a1a1a\]]:opacity-[0.05] group-[.bg-\[\#0f0f0f\]]:opacity-[0.05] group-hover:opacity-[0.08] lg:group-hover:scale-[1.15] transition-all duration-1000 pointer-events-none">
                        <Watermark size={180} strokeWidth={0.5} className={themeInfo.theme === 'dark' ? 'text-white' : 'text-charcoal'} />
                     </div>
                     
                     <div className="relative z-10 w-16 h-16 mb-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                       <MainIcon className={`text-brand ${themeInfo.theme === 'dark' ? 'drop-shadow-lg' : 'drop-shadow-md'}`} size={48} strokeWidth={1.5} />
                     </div>
                     
                     <div className="relative z-10 flex flex-col grow">
                       <div className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase ${themeInfo.badgeText} mb-4 inline-flex items-center gap-2`}>
                         <div className={`w-2 h-2 rounded-full ${themeInfo.badgeDot}`}></div>
                         {program.category}
                       </div>
                       
                       <h3 className={`text-3xl md:text-4xl font-display mb-6 leading-tight ${themeInfo.textClass}`}>
                         {program.title}
                       </h3>
                       
                       <p className={`leading-[1.8] mb-12 text-lg ${themeInfo.descClass}`}>
                         {program.summary}
                       </p>
                       
                       <Link 
                         href={`/programs/${program.slug}`} 
                         className={`mt-auto inline-flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-500 w-fit ${themeInfo.btnClass}`}
                       >
                         View Program <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                       </Link>
                     </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        <section className="section home-section home-section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Learning Model"
              title="Why GU TECH program structure is stronger."
              description="Program delivery is framed around applied skills, innovation exposure, and values-led academic development."
              centered
            />
            <StaggerContainer className="info-grid">
              {pathwayHighlights.map((item) => (
                <StaggerItem className="info-card card-3d" key={item.title}>
                  <div className="feature-card__icon">
                    <item.icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
    </>
  );
}
