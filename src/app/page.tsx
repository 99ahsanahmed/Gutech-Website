import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, ArrowDown, GraduationCap, Map as MapIcon, Settings, 
  MessageSquare, Phone, Bot, TrendingUp, Coins, Sprout, Shield, 
  Award, Cpu, ArrowUpRight, Code2, Network, PieChart, Handshake, 
  Pentagon, Building2, Fingerprint 
} from 'lucide-react';
import FacultyWheel from '@/components/site/FacultyWheel';
import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import LatestUpdates from '@/components/site/LatestUpdates';
import NewsReelMobile from '@/components/site/NewsReelMobile';
import AnimatedCounter from '@/components/animations/AnimatedCounter';
import { createMetadata, facultyMembers, newsItems, siteConfig } from '@/lib/site-data';

export const metadata = createMetadata(
  'Home',
  'Official GU TECH university website with admissions, programs, departments, faculty, and student support.'
);

export default function Home() {
  return (
    <>
      <section className="sticky top-0 h-[100svh] overflow-hidden flex items-center justify-center text-center -z-10">
        <Image
          src="/campus-hero.jpg"
          alt="GU TECH campus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Subtle right-aligned red gradient matching other sections */}
        <div className="absolute inset-0 bg-gradient-to-l from-brand/40 via-black/50 to-black/80" />
        
        <div className="relative z-10 container flex flex-col items-center justify-center pt-24 pb-12">
          {/* Massive serif heading */}
          <FadeUp delay={0.2}>
            <h1 className="font-display text-white text-6xl md:text-8xl lg:text-[10rem] tracking-tight leading-none mb-12 drop-shadow-lg">
              GU TECH
            </h1>
          </FadeUp>

          {/* Explore indicator brought close to heading */}
          <FadeUp delay={0.3} className="flex flex-col items-center mt-4">
             <span className="text-white/70 text-xs tracking-[0.25em] uppercase mb-3 block font-bold">Explore GU TECH</span>
             <div className="animate-bounce">
               <ArrowDown className="text-white/80 mx-auto drop-shadow-sm" size={18} />
             </div>
          </FadeUp>
        </div>
      </section>

      {/* Infinite loop marquee restored */}
      <section className="home-marquee z-10 relative bg-brand text-white border-y border-[#262626]">
        <div className="home-marquee__rail">
          <div className="home-marquee__track py-4 text-xs md:text-sm font-bold tracking-widest uppercase opacity-90">
            <span>Admissions Open</span>
            <span>BS Computer Science</span>
            <span>BBA</span>
            <span>MS Islamic Banking &amp; Finance</span>
            <span>Executive Learning</span>
            <span>Design Thinking Resources</span>
            <span>Admissions Open</span>
            <span>BS Computer Science</span>
          </div>
          <div className="home-marquee__track py-4 text-xs md:text-sm font-bold tracking-widest uppercase opacity-90" aria-hidden="true">
            <span>Admissions Open</span>
            <span>BS Computer Science</span>
            <span>BBA</span>
            <span>MS Islamic Banking &amp; Finance</span>
            <span>Executive Learning</span>
            <span>Design Thinking Resources</span>
            <span>Admissions Open</span>
            <span>BS Computer Science</span>
          </div>
        </div>
      </section>

      <main className="bg-white text-charcoal relative z-10">
        {/* SECTION 2: Introduction & Quick Stats */}
        <section className="py-24 md:py-32 container relative z-10">
          <FadeUp className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-8 text-charcoal drop-shadow-sm">Where ambition meets <br/><span className="text-brand">academic excellence.</span></h2>
            <p className="text-xl md:text-2xl text-charcoal/70 leading-[1.7] max-w-3xl mx-auto">
              A modern university experience across technology, management, innovation, and professional development.
            </p>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/programs" className="group relative px-10 py-5 bg-brand text-white rounded-none overflow-hidden font-bold tracking-[0.15em] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl uppercase text-sm">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 flex items-center text-white gap-3">Explore Programs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300"/></div>
              </Link>
              <a href={siteConfig.applyHref} target="_blank" rel="noreferrer" className="group px-10 py-5 border-[2px] border-charcoal bg-charcoal text-white hover:bg-brand hover:border-brand transition-all duration-300 font-bold tracking-[0.15em] relative shadow-sm hover:shadow-xl hover:-translate-y-1 uppercase text-sm">
                <div className="relative z-10 flex items-center text-white gap-2">Apply Now</div>
              </a>
            </div>
          </FadeUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto border-t border-[#262626]/20 pt-24">
            {/* Stat 1: Programs */}
            <StaggerItem className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                <GraduationCap className="absolute -top-2 text-charcoal opacity-10 group-hover:-translate-y-2 group-hover:opacity-20 transition-all duration-700" size={80} strokeWidth={1} />
                <GraduationCap className="absolute top-2 text-brand drop-shadow-md group-hover:scale-110 transition-transform duration-500" size={56} strokeWidth={1.5} />
                <GraduationCap className="absolute top-8 text-charcoal/20" size={48} strokeWidth={2} />
              </div>
              <div className="text-6xl md:text-[5.5rem] font-display mb-4 text-charcoal tabular-nums tracking-tight"><AnimatedCounter value={5} /></div>
              <div className="text-xs md:text-sm tracking-[0.25em] uppercase text-charcoal/60 font-bold">Current Programs</div>
            </StaggerItem>

            {/* Stat 2: Innovation Units */}
            <StaggerItem className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                <MapIcon className="absolute top-0 text-charcoal opacity-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700" size={80} strokeWidth={1} />
                <Settings className="absolute top-5 left-4 text-brand drop-shadow-sm group-hover:rotate-180 transition-all duration-[2000ms] ease-out" size={36} strokeWidth={1.5} />
                <Settings className="absolute top-10 right-4 text-charcoal group-hover:-rotate-90 transition-all duration-[3000ms] ease-out" size={24} strokeWidth={2} />
              </div>
              <div className="text-6xl md:text-[5.5rem] font-display mb-4 text-charcoal tabular-nums tracking-tight"><AnimatedCounter value={5} /></div>
              <div className="text-xs md:text-sm tracking-[0.25em] uppercase text-charcoal/60 font-bold">Innovation Units</div>
            </StaggerItem>

            {/* Stat 3: Chat Hub */}
            <StaggerItem className="relative flex flex-col items-center text-center group cursor-pointer">
              <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="absolute inset-0 z-20" aria-label="WhatsApp Contact"></a>
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                <MessageSquare className="absolute top-0 text-charcoal group-hover:scale-105 transition-transform duration-500" size={72} strokeWidth={1} />
                <Bot className="absolute bottom-1 right-0 text-brand drop-shadow-md group-hover:-translate-y-2 transition-transform duration-500 delay-75" size={32} strokeWidth={1.5} />
                <Phone className="absolute top-[18px] left-6 text-white" size={20} strokeWidth={2} />
              </div>
              <div className="text-6xl md:text-[5.5rem] font-display mb-4 text-charcoal tracking-tight">Hub</div>
              <div className="text-xs md:text-sm tracking-[0.25em] uppercase text-brand font-bold group-hover:tracking-[0.3em] transition-all duration-500">Contact Channels</div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* SECTION 3: Mission Pillars */}
        <section className="py-24 md:py-40 bg-[#fafafa] border-y border-[#262626]/10 relative z-10 overflow-hidden">
          <div className="container">
            <FadeUp className="max-w-2xl mb-24 relative">
              <h2 className="font-display text-4xl md:text-6xl mb-8 text-charcoal leading-[1.1]">A platform built for <br/><span className="italic text-brand">clarity and action.</span></h2>
              <div className="w-16 h-[2px] bg-brand mb-10 shadow-sm opacity-80"></div>
              <p className="text-lg md:text-xl text-charcoal/70 leading-[1.8]">
                Clear pathways, stronger visual rhythm, and immediate routes for students and families to make informed decisions.
              </p>
            </FadeUp>
            
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Pillar 1: Earn As You Learn */}
              <StaggerItem className="lg:col-span-5 relative lg:top-8 group bg-white border border-[#262626]/20 p-10 md:p-14 shadow-sm hover:shadow-2xl hover:border-brand/40 transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 w-24 h-24 mb-14">
                  <TrendingUp className="absolute bottom-0 text-charcoal opacity-5 group-hover:scale-[1.3] group-hover:-translate-y-2 transition-all duration-1000" size={96} strokeWidth={1} />
                  <Coins className="absolute bottom-4 left-0 text-brand group-hover:-translate-y-1 transition-transform duration-500" size={40} strokeWidth={1.5} />
                  <Sprout className="absolute top-0 right-4 text-charcoal group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" size={44} strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-display mb-6 text-charcoal group-hover:text-brand transition-colors duration-500">Earn As You Learn</h3>
                  <p className="text-charcoal/70 leading-[1.9] text-lg">A unique 2+2 structure blending entrepreneurial exposure with practical execution, enabling you to build your career well before graduation.</p>
                </div>
              </StaggerItem>

              {/* Pillars 2 & 3 */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Pillar 2: Faculty */}
                <StaggerItem className="bg-white border border-[#262626]/20 p-8 md:p-12 shadow-sm hover:shadow-2xl hover:border-brand/40 transition-all duration-700 hover:-translate-y-2 group flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-brand/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10 w-20 h-20 mb-12">
                    <Shield className="absolute top-0 left-0 text-charcoal opacity-[0.03] group-hover:rotate-12 group-hover:scale-110 transition-all duration-700" size={72} strokeWidth={1} />
                    <Award className="absolute bottom-0 right-4 text-brand drop-shadow-sm group-hover:scale-110 transition-transform duration-500 delay-75" size={48} strokeWidth={1.5} />
                    <Cpu className="absolute top-5 left-6 text-charcoal group-hover:text-black transition-colors duration-500" size={28} strokeWidth={1.5} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-display mb-5 text-charcoal group-hover:text-brand transition-colors duration-500 leading-tight">Faculty From Top Schools</h3>
                    <p className="text-charcoal/70 leading-[1.8]">Learn from academic leadership with proven experience across institutions like <span className="font-bold text-charcoal drop-shadow-sm tracking-wide">MIT, LUMS, FAST-NU, IBA, KSBL, and KIET</span>.</p>
                  </div>
                </StaggerItem>

                {/* Pillar 3: Tech-Inspired */}
                <StaggerItem className="bg-[#fdfdfd] border border-[#262626]/20 p-8 md:p-12 shadow-sm hover:shadow-2xl hover:border-brand/40 transition-all duration-700 hover:-translate-y-2 sm:relative sm:top-16 group flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10 w-20 h-20 mb-12">
                    <Cpu className="absolute bottom-2 left-0 text-charcoal opacity-[0.03] group-hover:scale-110 transition-transform duration-700" size={72} strokeWidth={1} />
                    <Settings className="absolute top-0 right-6 text-brand group-hover:rotate-180 transition-transform duration-[2000ms] ease-out shadow-sm" size={36} strokeWidth={1.5} />
                    <ArrowUpRight className="absolute bottom-5 right-2 text-charcoal group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" size={40} strokeWidth={1.5} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-display mb-5 text-charcoal group-hover:text-brand transition-colors duration-500 leading-tight">Tech-Inspired, Market-Driven</h3>
                    <p className="text-charcoal/70 leading-[1.8]">We break down silos. Our programs are built around the intersections of software, data, management, finance, and applied innovation.</p>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* SECTION 4: Academics */}
        <section className="py-24 md:py-40 container relative z-10 pt-32">
          <FadeUp className="max-w-3xl mb-24 relative">
            <h2 className="font-display text-4xl md:text-6xl mb-8 text-charcoal leading-[1.1]">Undergraduate & Graduate <br/><span className="italic text-brand">Pathways</span></h2>
            <div className="w-16 h-[2px] bg-brand mb-10 shadow-sm opacity-80"></div>
            <p className="text-xl text-charcoal/70 leading-[1.8]">Structured outcomes and direct admission routes engineered for deep integration.</p>
          </FadeUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Undergrad 1: BS CS */}
            <StaggerItem className="group border border-[#262626]/20 bg-white p-10 md:p-12 shadow-sm hover:shadow-2xl hover:border-[#262626]/50 transition-all duration-700 flex flex-col relative overflow-hidden hover:-translate-y-2 lg:col-span-2">
               <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-[1.15] group-hover:rotate-3 transition-all duration-1000 pointer-events-none">
                  <Code2 size={180} strokeWidth={0.5} />
               </div>
               
               <div className="relative z-10 w-20 h-20 mb-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                 <Code2 className="absolute text-brand drop-shadow-md" size={56} strokeWidth={1} />
                 <Network className="absolute text-charcoal/80 translate-x-5 translate-y-4" size={32} strokeWidth={1.5} />
               </div>
               
               <div className="relative z-10 flex flex-col grow">
                 <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-charcoal/40 mb-4 inline-flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand/40"></div>
                   Undergraduate
                 </div>
                 <h3 className="text-3xl md:text-4xl font-display mb-6 text-charcoal">BS Computer Science</h3>
                 <p className="text-charcoal/70 leading-[1.8] mb-12 text-lg">A modern computing degree shaped around software, data, AI, product thinking, and career readiness.</p>
                 
                 <Link href="/programs/bs-cs" className="mt-auto inline-flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-xs text-brand group-hover:text-charcoal transition-colors duration-500 w-fit">
                   View Program <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                 </Link>
               </div>
            </StaggerItem>

            {/* Undergrad 2: BBA */}
            <StaggerItem className="group border border-[#262626]/20 bg-[#fafafa] p-10 md:p-12 shadow-sm hover:shadow-2xl hover:border-[#262626]/50 transition-all duration-700 flex flex-col relative overflow-hidden hover:-translate-y-2 lg:col-span-2">
               <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-[1.15] transition-all duration-1000 pointer-events-none">
                  <PieChart size={180} strokeWidth={0.5} />
               </div>
               
               <div className="relative z-10 w-20 h-20 mb-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                 <Handshake className="absolute text-brand drop-shadow-md" size={48} strokeWidth={1} />
                 <PieChart className="absolute text-charcoal/80 -translate-x-5 translate-y-5" size={28} strokeWidth={1.5} />
               </div>
               
               <div className="relative z-10 flex flex-col grow">
                 <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-charcoal/40 mb-4 inline-flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand/40"></div>
                   Undergraduate
                 </div>
                 <h3 className="text-3xl md:text-4xl font-display mb-6 text-charcoal">BS Business Administration</h3>
                 <p className="text-charcoal/70 leading-[1.8] mb-12 text-lg">Core management fundamentals combined with deep analytical and communication training.</p>
                 
                 <Link href="/programs/bba" className="mt-auto inline-flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-xs text-brand group-hover:text-charcoal transition-colors duration-500 w-fit">
                   View Program <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                 </Link>
               </div>
            </StaggerItem>

            {/* Grad 1: MS IBF */}
            <StaggerItem className="group border border-[#262626] bg-charcoal p-10 md:p-12 shadow-lg hover:shadow-2xl hover:border-brand/80 transition-all duration-700 flex flex-col relative overflow-hidden hover:-translate-y-2 lg:col-span-2">
               <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
               <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] group-hover:rotate-12 group-hover:scale-110 transition-all duration-1000 pointer-events-none">
                  <Pentagon size={180} strokeWidth={0.5} />
               </div>
               
               <div className="relative z-10 w-20 h-20 mb-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                 <Pentagon className="absolute text-brand drop-shadow-lg" size={56} strokeWidth={1} />
                 <Building2 className="absolute text-white translate-x-3 translate-y-3" size={28} strokeWidth={1.5} />
               </div>
               
               <div className="relative z-10 flex flex-col grow">
                 <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-4 inline-flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-white/20"></div>
                   Graduate
                 </div>
                 <h3 className="text-3xl md:text-4xl font-display mb-6 text-white leading-tight">MS Islamic Banking & Finance</h3>
                 <p className="text-charcoal-200 leading-[1.8] mb-12 text-lg text-white/70">Connecting ethical finance, regulatory practice, and modern banking leadership.</p>
                 
                 <Link href="/programs/ms-ibf" className="mt-auto inline-flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-xs text-brand group-hover:text-white transition-colors duration-500 w-fit">
                   View Program <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                 </Link>
               </div>
            </StaggerItem>

            {/* Grad 2: MS DS */}
            <StaggerItem className="group border border-[#262626] bg-[#1a1a1a] p-10 md:p-12 shadow-lg hover:shadow-2xl hover:border-brand/80 transition-all duration-700 flex flex-col relative overflow-hidden hover:-translate-y-2 lg:col-span-2">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
               <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-1000 pointer-events-none">
                  <Fingerprint size={180} strokeWidth={0.5} />
               </div>
               
               <div className="relative z-10 w-20 h-20 mb-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                 <Network className="absolute text-brand drop-shadow-lg" size={56} strokeWidth={1} />
                 <Fingerprint className="absolute text-white translate-x-4 -translate-y-3" size={28} strokeWidth={1.5} />
               </div>
               
               <div className="relative z-10 flex flex-col grow">
                 <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-4 inline-flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-white/20"></div>
                   Graduate
                 </div>
                 <h3 className="text-3xl md:text-4xl font-display mb-6 text-white">MS Data Science</h3>
                 <p className="text-charcoal-200 leading-[1.8] mb-12 text-lg text-white/70">A specialized pathway for analytics, machine learning, and data-led decision making.</p>
                 
                 <Link href="/programs/ms-ds" className="mt-auto inline-flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-xs text-brand group-hover:text-white transition-colors duration-500 w-fit">
                   View Program <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                 </Link>
               </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Admissions Journey */}
        <section className="py-24 md:py-40 bg-charcoal text-white pt-32">
          <div className="container">
            <FadeUp className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="font-display text-4xl md:text-5xl mb-6">From first visit to enrolled student.</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-[1.6]">A streamlined path from your ambition to your first day on campus.</p>
            </FadeUp>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Explore Pathways", text: "Review undergraduate and graduate routes, complete with clear outcomes and progression criteria." },
                { step: "02", title: "Connect with Admissions", text: "Get direct support for fees, scholarships, and processing through our official channels." },
                { step: "03", title: "Start Your Journey", text: "Apply through the official portal with guided, step-by-step onboarding." }
              ].map(item => (
                <StaggerItem key={item.step} className="relative mt-8 md:mt-0">
                  <div className="absolute -top-12 -left-6 text-8xl font-display text-white/5 pointer-events-none select-none">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                  <p className="text-gray-400 leading-[1.6] relative z-10">{item.text}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
            
            <FadeUp delay={0.3} className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/admissions" className="px-8 py-4 bg-brand text-white rounded-none transition-colors font-bold tracking-[0.1em] uppercase text-sm">
                Start Admissions
              </Link>
              <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="px-8 py-4 border-[2px] border-brand text-brand hover:bg-brand hover:text-white transition-colors font-bold tracking-[0.1em] uppercase text-sm">
                WhatsApp Support
              </a>
            </FadeUp>
          </div>
        </section>

        {/* Latest News (Integration from News page) */}
        <LatestUpdates />

        {/* Campus Life Bento/Zigzag */}
        <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200 overflow-hidden">
          <div className="container">
            <FadeUp className="max-w-2xl mb-24">
              <h2 className="font-display text-4xl md:text-5xl mb-6">Life at GU TECH</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-[1.6]">Innovation, competition, and leadership beyond the classroom.</p>
            </FadeUp>

            <StaggerContainer className="space-y-24">
              {[
                { title: "GirlCode 2.0 – Coders Day", text: "Empowering the next generation of female technologists. A dynamic platform for our female students to learn, compete, and build innovative solutions.", img: "/students-1.jpg" },
                { title: "GATA AI Talent Accelerator", text: "Concluding an impactful journey of real-world exposure. Students engaged directly with industry leaders, including Saad Afridi (CEO, Scents N Stories), gaining practical insights to think beyond limits.", img: "/students-2.jpg", reverse: true },
                { title: "Shaping Perspectives", text: "Ahsan Sabz led an engaging session on the intersection of media and public perception, exploring how narratives are built and scaled in the modern digital landscape.", img: "/Students-3.jpg" },
                { title: "Leap Innovation Challenge 2.0", text: "Bridging academia and industry. Our brightest minds showcased functional prototypes to national CEOs, followed by expert panels delivering practical advice for scaling student-led startups.", img: "/students-4.jpg", reverse: true }
              ].map((item) => (
                <StaggerItem key={item.title} className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
                  <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden bg-gray-200 shadow-sm border border-black/5">
                     <Image 
                        src={item.img} 
                        alt={item.title} 
                        fill 
                        className="object-cover" 
                        sizes="(max-width: 960px) 100vw, 50vw" 
                     />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-3xl font-display mb-6">{item.title}</h3>
                    <p className="text-gray-600 leading-[1.6] text-lg">{item.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Faculty Spotlight */}
        <section className="py-24 md:py-32 container overflow-hidden">
          <FadeUp className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Faculty Spotlight</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-[1.6]">Visible academic leadership. Faculty identity and expertise are presented as core trust signals.</p>
          </FadeUp>
          <FadeUp delay={0.2} className="flex justify-center mb-12 relative w-full h-[600px] bg-white border border-gray-100 items-center overflow-hidden">
            <FacultyWheel members={facultyMembers} radiusDesktop={430} radiusMobile={320} showSchool={true} className="!h-full !min-h-0" />
          </FadeUp>
        </section>

        {/* Early Industry Immersion */}
        <section className="py-24 md:py-32 bg-charcoal text-white overflow-hidden pb-40">
          <div className="container">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl mb-8">Experience from Day One.</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-[1.6] max-w-3xl mb-16">
                We don't wait until graduation. By their 3rd semester, GU TECH students are actively deploying their skills in the real world. Our current cohort has secured hands-on internships across Full-Stack Development, Project Management, AI Agent Building, Cybersecurity, and UI/UX Design.
              </p>
            </FadeUp>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1000px] md:h-[600px]">
              {/* Item 1 - Big Block */}
              <StaggerItem className="relative overflow-hidden bg-white/5 transition-colors group md:col-span-2 md:row-span-2 h-[300px] md:h-full border border-[#262626]">
                <Image src="/internship-1.jpg" alt="Experience 1" fill className="object-cover opacity-80 group-hover:opacity-100 duration-500 scale-105 group-hover:scale-100 shadow-xl" sizes="(max-width: 960px) 100vw, 50vw" />
              </StaggerItem>
              
              {/* Item 2 - Wide Block */}
              <StaggerItem className="relative overflow-hidden bg-white/5 transition-colors group md:col-span-2 md:row-span-1 h-[250px] md:h-full border border-[#262626]">
                <Image src="/Internship-2.jpg" alt="Experience 2" fill className="object-cover opacity-80 group-hover:opacity-100 duration-500 scale-105 group-hover:scale-100 shadow-xl" sizes="(max-width: 960px) 100vw, 50vw" />
              </StaggerItem>

              {/* Item 3 - Square Block */}
              <StaggerItem className="relative overflow-hidden bg-white/5 transition-colors group md:col-span-1 md:row-span-1 h-[250px] md:h-full border border-[#262626]">
                <Image src="/Internship-3.jpg" alt="Experience 3" fill className="object-cover opacity-80 group-hover:opacity-100 duration-500 scale-105 group-hover:scale-100" sizes="(max-width: 960px) 50vw, 25vw" />
              </StaggerItem>

              {/* Item 4 - Square Block */}
              <StaggerItem className="relative overflow-hidden bg-white/5 transition-colors group md:col-span-1 md:row-span-1 h-[250px] md:h-full border border-[#262626]">
                <Image src="/internship-4.webp" alt="Experience 4" fill className="object-cover opacity-80 group-hover:opacity-100 duration-500 scale-105 group-hover:scale-100" sizes="(max-width: 960px) 50vw, 25vw" />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Standard Final State: News Reel Ticker overlaying bottom section or sitting right below as previously structured. */}
        <NewsReelMobile items={newsItems.slice(0, 3)} />

      </main>
    </>
  );
}
