'use client';

import { 
  GraduationCap, Map as MapIcon, Settings, 
  MessageSquare, Phone, Bot, ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/site-data';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import AnimatedCounter from '@/components/animations/AnimatedCounter';

const statItems = [
  {
    id: 0,
    title: 'Current Programs',
    value: 5,
    details: [
      'BS Computer Science', 
      'Bachelors of Business Administration (BBA)', 
      'MS Islamic Banking & Finance', 
      'MS Data Science', 
      'Executive Learning Programs'
    ],
    iconElements: (
      <>
        <GraduationCap className="absolute -top-2 text-charcoal opacity-10 transition-all duration-700" size={80} strokeWidth={1} />
        <GraduationCap className="absolute top-2 text-brand drop-shadow-md" size={56} strokeWidth={1.5} />
        <GraduationCap className="absolute top-8 text-charcoal/20" size={48} strokeWidth={2} />
      </>
    )
  },
  {
    id: 1,
    title: 'Innovation Units',
    value: 5,
    details: [
      'GATA AI Talent Accelerator', 
      'GirlCode Innovation', 
      'Leap Challenge Labs', 
      'Executive Action Units', 
      'Corporate Connect Labs'
    ],
    iconElements: (
      <>
        <MapIcon className="absolute top-0 text-charcoal opacity-5 transition-all duration-700" size={80} strokeWidth={1} />
        <Settings className="absolute top-5 left-4 text-brand drop-shadow-sm transition-all duration-[2000ms] ease-out" size={36} strokeWidth={1.5} />
        <Settings className="absolute top-10 right-4 text-charcoal transition-all duration-[3000ms] ease-out" size={24} strokeWidth={2} />
      </>
    )
  },
  {
    id: 2,
    title: 'Contact Channels',
    value: 3,
    href: siteConfig.whatsappHref,
    details: [
      '24/7 WhatsApp Assistance', 
      'Immediate Admissions Line', 
      'Corporate Relations Support'
    ],
    iconElements: (
      <>
        <MessageSquare className="absolute top-0 text-charcoal opacity-5 transition-transform duration-500" size={80} strokeWidth={1} />
        <Bot className="absolute bottom-2 right-4 text-brand drop-shadow-md transition-transform duration-500 delay-75" size={40} strokeWidth={1.5} />
        <Phone className="absolute top-[18px] left-6 text-charcoal/80" size={24} strokeWidth={2} />
      </>
    )
  }
];

export default function InteractiveStats() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto border-t border-[#262626]/20 pt-24">
      {statItems.map((item) => (
        <StaggerItem 
          key={item.id} 
          className="relative flex flex-col items-center text-center group cursor-pointer overflow-hidden p-6 md:p-8 rounded-lg"
        >
          {/* Main Stat Content (Slides Left on Mobile when Active) */}
          <div 
            onClick={() => handleClick(item.id)}
            className={`relative w-full flex flex-col items-center z-10 transition-transform duration-500 will-change-transform ${
              activeId === item.id ? 'max-md:-translate-x-[40%]' : 'translate-x-0'
            }`}
          >
            {/* Mobile interaction cue */}
            <div className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 md:hidden transition-opacity duration-300 ${activeId === item.id ? 'opacity-0' : 'opacity-100 animate-bounce-x text-brand drop-shadow-[0_0_8px_rgba(139,24,29,0.4)]'}`}>
              <ChevronRight size={24} strokeWidth={2.5} />
            </div>
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              <div className="group-hover:scale-105 transition-transform duration-500 w-full h-full relative">
                {item.iconElements}
              </div>
            </div>
            <div className="text-6xl md:text-[5.5rem] font-display mb-4 text-charcoal tabular-nums tracking-tight">
              <AnimatedCounter value={item.value} />
            </div>
            <div className={`text-xs md:text-sm tracking-[0.25em] uppercase font-bold transition-all duration-500 ${
              item.id === 2 ? 'text-brand group-hover:tracking-[0.3em]' : 'text-charcoal/60'
            }`}>
              {item.title}
            </div>
          </div>

          {/* Red Details Overlay */}
          <div 
            onClick={() => handleClick(item.id)}
            className={`absolute z-20 bg-brand text-white transition-all duration-[600ms] flex items-center justify-center
              /* Mobile Slider Animation (From right to inside container) */
              inset-y-0 right-0 w-[55%] translate-x-full
              ${activeId === item.id ? 'max-md:translate-x-0' : ''}
              
              /* Desktop Animation (Slide up from bottom to cover full card) */
              md:inset-0 md:w-full md:translate-x-0 md:translate-y-full md:group-hover:translate-y-0
            `}
          >
            <div className="p-6 text-left text-sm md:text-base leading-relaxed hidden md:block">
              <ul className="list-disc pl-4 space-y-1">
                {item.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
            {/* Optimized layout for mobile sliding panel to avoid overflow issues */}
            <div className="p-4 text-left text-[0.8rem] leading-relaxed md:hidden">
              <ul className="list-disc pl-3 space-y-1">
                {item.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
            
            {/* Optional full card click link for contact channel */}
            {item.href && activeId === item.id && (
               <a href={item.href} target="_blank" rel="noreferrer" className="absolute inset-0 z-30" aria-label={`Details for ${item.title}`} />
            )}
            {/* Empty anchor for desktop hover interaction for Contact */}
            {item.href && (
               <a href={item.href} target="_blank" rel="noreferrer" className="hidden md:block absolute inset-0 z-30" aria-label={`Details for ${item.title}`} />
            )}
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
