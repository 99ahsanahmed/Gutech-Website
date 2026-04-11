'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Tag, ChevronDown } from 'lucide-react';
import FadeUp from '@/components/animations/FadeUp';

const updateItems = [
  {
    id: 1,
    title: 'Explore Your Future: GU Tech Annual Open House',
    summary: 'Join us for an immersive campus experience. Meet our world-class faculty, explore our labs.',
    category: 'Event',
    readTime: '3 min read',
    image: '/News-1.jpg',
  },
  {
    id: 2,
    title: 'New Milestone: NOC Granted for MS in AI & Data Science',
    summary: 'GU Tech is officially authorized to launch advanced graduate programs in Artificial Intelligence.',
    category: 'Academic',
    readTime: '2 min read',
    image: '/News-2.jpg',
  },
  {
    id: 3,
    title: 'Mastering ERP: Exclusive Odoo Workshop',
    summary: 'A hands-on session exploring enterprise resource planning. Learn how to streamline business processes.',
    category: 'Workshop',
    readTime: '4 min read',
    image: '/News-3.jpg',
  },
];

export default function LatestUpdates() {
  return (
    <section className="section py-20! bg-gray-50/50">
      <div className="container">
        <header className="mb-12">
          <span className="eyebrow mb-4">Feed</span>
          <h2 className="text-3xl md:text-5xl font-display">Latest Updates</h2>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {updateItems.map((item, i) => (
            <FadeUp key={item.id} delay={i * 0.1} className="group flex flex-col h-full surface overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand text-[9px] font-bold uppercase tracking-wider text-white">
                    <Tag size={10} />
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-3">
                  <Clock size={12} />
                  {item.readTime}
                </div>
                
                <h3 className="text-xl font-display mb-3 group-hover:text-brand transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed line-clamp-3 mb-6">
                  {item.summary}
                </p>
                
                <div className="mt-auto pt-4 border-t border-line">
                  <span className="text-xs font-bold text-brand group-hover:underline cursor-pointer">
                    Read Full Story
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="button button--secondary group px-10 py-4 h-auto rounded-xl border-dashed border-2 hover:border-brand hover:text-brand transition-all">
            <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
              Load More Updates <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
