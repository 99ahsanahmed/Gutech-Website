'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, ExternalLink, Headphones } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import FadeUp from '@/components/animations/FadeUp';

const mediaCards = [
  {
    id: 1,
    title: 'Design Thinking Podcast',
    category: 'Podcast',
    youtubeId: 'sxPSMyLJ6Jc',
    url: 'https://youtu.be/sxPSMyLJ6Jc?si=Qda-xUNmCx87rSbu',
  },
  {
    id: 2,
    title: 'Should you do CS in 2026?',
    category: 'Career Guidance',
    youtubeId: '-Lc6JbT0CU8',
    url: 'https://youtu.be/-Lc6JbT0CU8?si=rytSI1TxGVBjfXcP',
  },
  {
    id: 3,
    title: 'MIT Faculty at GU Tech',
    category: 'Global Collaboration',
    youtubeId: 'iw2BtBm7o0s',
    url: 'https://youtu.be/iw2BtBm7o0s?si=ndULunhjO75gnlKl',
  },
];

export default function MediaCorner() {
  return (
    <section className="section py-20!">
      <div className="container">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-4">Media Corner</span>
            <h2 className="text-3xl md:text-5xl font-display">Video Gallery</h2>
          </div>
          <a 
            href="https://www.youtube.com/@gutech" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-brand font-bold group"
          >
            Visit Official Channel <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {mediaCards.map((card, i) => (
            <FadeUp key={card.id} delay={i * 0.1}>
              <a 
                href={card.url} 
                target="_blank" 
                rel="noreferrer"
                className="group block"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg surface group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <Image
                    src={`https://img.youtube.com/vi/${card.youtubeId}/maxresdefault.jpg`}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                      <Play size={28} fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-charcoal shadow-sm">
                    {card.category === 'Podcast' ? <Headphones size={12} /> : <FaYoutube size={12} className="text-red-600" />}
                    {card.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-display group-hover:text-brand transition-colors duration-300 leading-tight">
                  {card.title}
                </h3>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
