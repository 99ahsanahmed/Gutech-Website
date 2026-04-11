'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Tag, ArrowUpRight } from 'lucide-react';
import FadeUp from '@/components/animations/FadeUp';

const featuredStories = [
  {
    id: 1,
    title: 'Explore Your Future: GU Tech Annual Open House',
    description: 'Join us for an immersive campus experience. Meet our world-class faculty, explore our labs, and discover the program that fits your ambition.',
    category: 'Event',
    readTime: '3 min read',
    image: '/News-1.jpg',
    size: 'large',
  },
  {
    id: 2,
    title: 'New Milestone: NOC Granted for MS in AI & Data Science',
    description: 'GU Tech is officially authorized to launch advanced graduate programs in Artificial Intelligence and Data Science.',
    category: 'Academic',
    readTime: '2 min read',
    image: '/News-2.jpg',
    size: 'small',
  },
  {
    id: 3,
    title: 'Mastering ERP: Exclusive Odoo Workshop',
    description: 'A hands-on session exploring enterprise resource planning. Learn how to streamline business processes.',
    category: 'Workshop',
    readTime: '4 min read',
    image: '/News-3.jpg',
    size: 'small',
  },
];

export default function NewsHero() {
  const mainStory = featuredStories.find(s => s.size === 'large')!;
  const sideStories = featuredStories.filter(s => s.size === 'small');

  return (
    <section className="section pb-0!">
      <div className="container">
        <header className="mb-12">
          <span className="eyebrow mb-4">The Spotlight</span>
          <h1 className="text-4xl md:text-6xl font-display mb-4">Featured Stories</h1>
        </header>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Story (Large Card) */}
          <FadeUp className="lg:col-span-8 group relative overflow-hidden rounded-3xl surface shadow-2xl h-[500px] lg:h-[600px]">
            <Image
              src={mainStory.image}
              alt={mainStory.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-white">
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand text-[10px] font-bold uppercase tracking-wider">
                  <Tag size={12} />
                  {mainStory.category}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
                  <Clock size={12} />
                  {mainStory.readTime}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-display mb-6 max-w-2xl leading-tight group-hover:text-brand transition-colors duration-300">
                {mainStory.title}
              </h2>
              <p className="text-white/80 max-w-xl text-lg hidden md:block mb-8 leading-relaxed">
                {mainStory.description}
              </p>
              
              <button className="flex items-center gap-2 font-bold group/btn w-fit">
                Read Story <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </FadeUp>

          {/* Side Stories */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {sideStories.map((story, i) => (
              <FadeUp key={story.id} delay={0.1 * (i + 1)} className="flex-1 group relative overflow-hidden rounded-3xl surface shadow-xl min-h-[240px]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="flex gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand">{story.category}</span>
                    <span className="text-[10px] font-medium uppercase tracking-widest opacity-60">|</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{story.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display mb-2 group-hover:text-brand transition-colors duration-300 leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2 md:hidden lg:block">
                    {story.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
