'use client';

import { motion } from 'framer-motion';
import { Search, ClipboardCheck, Edit3, Send, MailCheck } from 'lucide-react';
import FadeUp from '@/components/animations/FadeUp';

const steps = [
  {
    icon: Search,
    title: 'Explore',
    text: 'Offerings and criteria.',
  },
  {
    icon: ClipboardCheck,
    title: 'Review',
    text: 'Selection process and documents.',
  },
  {
    icon: Edit3,
    title: 'Fill',
    text: 'Online application form.',
  },
  {
    icon: Send,
    title: 'Submit',
    text: 'Send documents to admissions@gutech.edu.pk.',
  },
  {
    icon: MailCheck,
    title: 'Stay Active',
    text: 'Monitor email and contact number.',
  },
];

export default function AdmissionFlow() {
  return (
    <section className="section bg-gray-50/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="eyebrow mb-3">Interactive Guide</span>
          <h2 className="text-3xl md:text-4xl font-display" style={{ fontFamily: 'var(--font-display)' }}>How to Apply</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-line z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.1}>
                <div className="group flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 rounded-full bg-white border-2 border-line flex items-center justify-center mb-6 shadow-sm group-hover:border-brand group-hover:text-brand transition-colors duration-300"
                  >
                    <step.icon size={36} strokeWidth={1.5} />
                  </motion.div>
                  
                  <div className="text-center px-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand opacity-60 mb-1 block">Step {i + 1}</span>
                    <h3 className="text-xl font-display mb-2">{step.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed max-w-[180px] mx-auto">
                      {step.text}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
