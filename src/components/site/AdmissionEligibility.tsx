'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Info, GraduationCap, BookOpen, FileText } from 'lucide-react';
import { useState } from 'react';

import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

type ProgramCriteria = {
  title: string;
  criteria: string[];
};

const undergradCriteria: ProgramCriteria[] = [
  {
    title: 'BBA',
    criteria: [
      '12 years of education (Inter/A-Levels)',
      'Minimum 50% marks',
    ],
  },
  {
    title: 'BS Computer Science',
    criteria: [
      '12 years of education (Inter/A-Levels)',
      'Minimum 50% marks',
    ],
  },
];

const graduateCriteria: ProgramCriteria[] = [
  {
    title: 'MS Islamic Banking & Finance',
    criteria: [
      '16 years of education',
      'Min 50% (Annual) or 2.00/4.00 CGPA (Semester)',
    ],
  },
];

export default function AdmissionEligibility() {
  const [activeTab, setActiveTab] = useState<'undergrad' | 'graduate'>('undergrad');

  return (
    <section className="section">
      <div className="container">
        <div className="surface p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div>
              <span className="eyebrow mb-3">Information Hub</span>
              <h2 className="text-3xl md:text-4xl font-display leading-tight">Eligibility & Selection</h2>
            </div>
            
            <div className="flex bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('undergrad')}
                className={`button ${
                  activeTab === 'undergrad' ? 'button--light' : 'button--secondary'
                } !min-h-0 !py-2 !px-6`}
              >
                Undergraduate
              </button>
              <button
                onClick={() => setActiveTab('graduate')}
                className={`button ${
                  activeTab === 'graduate' ? 'button--light' : 'button--secondary'
                } !min-h-0 !py-2 !px-6`}
              >
                Graduate
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>
                <GraduationCap className="text-brand" />
                Admission Requirements
              </h3>
              <div className="grid gap-4">
                {(activeTab === 'undergrad' ? undergradCriteria : graduateCriteria).map((program) => (
                  <div key={program.title} className="p-5 rounded-xl border border-line bg-white/50">
                    <h4 className="font-bold text-lg mb-3">{program.title}</h4>
                    <ul className="space-y-2">
                      {program.criteria.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                          <CheckCircle2 className="text-brand mt-0.5" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-xl bg-brand/5 border-l-4 border-brand">
                <div className="flex gap-3">
                  <Info className="text-brand shrink-0" size={20} />
                  <div>
                    <strong className="block text-sm mb-1">Pro-tip: IBCC Equivalence</strong>
                    <p className="text-sm text-ink-soft">
                      Candidates with A-Levels/O-Levels must provide IBCC equivalence certificates. Result-awaited students may also apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>
                <BookOpen className="text-brand" />
                Selection Process & Tests
              </h3>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-charcoal text-white relative overflow-hidden group">
                  <div className="relative z-10">
                    <span className="text-xs uppercase tracking-wider font-bold opacity-70 mb-2 block">Primary Test</span>
                    <h4 className="text-2xl font-display mb-3" style={{ fontFamily: 'var(--font-display)' }}>GSAT (GU Selection Aptitude Test)</h4>
                    <p className="text-sm text-white/80 mb-6">
                      Mandatory assessment for most programs focusing on analytical and verbal reasoning.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-sm font-bold text-white border-b-2 border-white/30 hover:border-white transition-all pb-1"
                    >
                      View sample questions
                    </a>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <FileText size={160} />
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-line surface">
                  <h4 className="font-bold mb-4">Other Acceptable Tests</h4>
                  <ul className="grid grid-cols-2 gap-3 text-sm text-ink-soft">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      SAT
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      HEC-NAT
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      HEC-HAT
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      USAT
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
