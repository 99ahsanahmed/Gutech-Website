import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import ParallaxHeroBackground from '@/components/animations/ParallaxHeroBackground';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <ParallaxHeroBackground />
        <div className="hero-campus-layout">
          <FadeUp className="container">
            <h1 className="uppercase text-5xl font-bold">
              Al Ghazali <br />
              <span className="branded-highlight">University</span>
            </h1>
            <p className="mt-6 font-light">
              Empowering students with flexibility, technological expertise, and market-driven curriculum.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link href="/about" className="btn btn-hero-primary">Learn More</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section section-bg-light">
        <FadeUp className="container">
          <h2 className="section-title">Why Enroll in Our Programs?</h2>
          <StaggerContainer className="grid">
            <StaggerItem className="card">
              <h3 className="card-title">Earn As You Learn</h3>
              <p className="card-text">
                Empowering students with flexibility, our 2+2 program structure and innovation incubation center allow you to earn, learn, and achieve a bachelor's degree simultaneously. After two years, 65% of your academic work is completed, leaving ample time to gain real-world experience and earn in the third and fourth years.
              </p>
            </StaggerItem>
            <StaggerItem className="card">
              <h3 className="card-title">Faculty From Top Schools</h3>
              <p className="card-text">
                Our institution boasts a distinguished faculty drawn from the world's leading schools, bringing unparalleled expertise and insights to guide students towards academic excellence and real-world success.
              </p>
            </StaggerItem>
            <StaggerItem className="card">
              <h3 className="card-title">Tech Inspired, Market-Driven</h3>
              <p className="card-text">
                Our programs strategically blend industry domain knowledge, creating an immediate demand in the job market, while our faculty imparts cutting-edge technology and communication skills, preparing students for both local and global job markets.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </FadeUp>
      </section>

      <section className="section">
        <FadeUp className="container text-center">
          <h2 className="section-title">Our Programs</h2>
          <p className="card-text text-xl max-w-2xl mx-auto mb-12">
            Become part of an exciting journey of learning across disciplines with a practical problem solving approach.
          </p>
          <StaggerContainer className="grid">
            <StaggerItem className="card text-center">
              <div className="font-bold text-dark text-4xl mb-4 font-playfair">MS</div>
              <h3 className="card-title card-title-primary">Islamic Banking & Finance</h3>
              <Link href="/programs/ms-ibf" className="btn btn-outline mt-4">Learn More</Link>
            </StaggerItem>
            <StaggerItem className="card text-center">
              <div className="font-bold text-dark text-4xl mb-4 font-playfair">BBA</div>
              <h3 className="card-title card-title-primary">Business Administration</h3>
              <Link href="/programs/bba" className="btn btn-outline mt-4">Learn More</Link>
            </StaggerItem>
            <StaggerItem className="card text-center">
              <div className="font-bold text-dark text-4xl mb-4 font-playfair">BS CS</div>
              <h3 className="card-title card-title-primary">BS Computer Science</h3>
              <Link href="/programs/bs-cs" className="btn btn-outline mt-4">Learn More</Link>
            </StaggerItem>
          </StaggerContainer>
        </FadeUp>
      </section>
      
      <section className="section section-bg-light">
        <FadeUp className="container">
          <h2 className="section-title">News & Updates</h2>
          <div className="news-box">
            <div className="news-box-text">
              <h3 className="card-title text-2xl mb-4">Dr. Zeeshan's Insightful Tarbiyah Session</h3>
              <p className="card-text mb-6">
                Dr. Zeeshan conducted an insightful Tarbiyah session at GU TECH, guiding students on personal growth, values, and leadership. A session filled with wisdom and inspiration!
              </p>
              <Link href="/news" className="text-primary font-medium hover:text-dark" style={{transition: 'color 0.3s ease'}}>View All News &rarr;</Link>
            </div>
            <div className="news-box-image-wrapper">
               <div className="rounded-image image-placeholder w-full h-full" style={{minHeight: '250px'}}>
                 Educational Session Image
               </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <section className="section section-bg-dark">
        <FadeUp className="container">
          <div className="vc-section">
            <div className="rounded-image image-placeholder vc-image">
               Image of Vice Chancellor
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-2">Mufti Ehsan Waquar</h3>
              <p className="text-accent font-medium text-xl mb-6">Vice Chancellor</p>
              <blockquote className="vc-quote text-xl">
                "At the heart of every educational endeavor is the mission to shape minds and hearts in ways that positively impact the world. At Al-Ghazali University, our vision goes beyond imparting academic knowledge. We aim to nurture individuals who not only excel in contemporary fields but are also deeply rooted in the moral and spiritual traditions."
              </blockquote>
              <Link href="/about" className="btn btn-hero-outline mt-8">Read More</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
