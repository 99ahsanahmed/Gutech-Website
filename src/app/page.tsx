import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero hero-campus">
        <div className="container">
          <h1 style={{ textTransform: 'uppercase', fontSize: '5rem' }}>Al Ghazali <br /> <span className="text-primary" style={{ backgroundColor: '#fff', padding: '0 1rem', display: 'inline-block', marginTop: '1rem', borderRadius: '4px' }}>University</span></h1>
          <p className="mt-6" style={{ fontSize: '1.4rem' }}>
            Empowering students with flexibility, technological expertise, and market-driven curriculum.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/about" className="btn btn-primary" style={{ backgroundColor: '#ffffff', color: 'var(--primary-red)' }}>Learn More</Link>
          </div>
        </div>
      </section>

      <section className="section section-bg-light">
        <div className="container">
          <h2 className="section-title">Why Enroll in Our Programs?</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Earn As You Learn</h3>
              <p className="card-text">
                Empowering students with flexibility, our 2+2 program structure and innovation incubation center allow you to earn, learn, and achieve a bachelor's degree simultaneously. After two years, 65% of your academic work is completed, leaving ample time to gain real-world experience and earn in the third and fourth years.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Faculty From Top Schools</h3>
              <p className="card-text">
                Our institution boasts a distinguished faculty drawn from the world's leading schools, bringing unparalleled expertise and insights to guide students towards academic excellence and real-world success.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Tech Inspired, Market-Driven</h3>
              <p className="card-text">
                Our programs strategically blend industry domain knowledge, creating an immediate demand in the job market, while our faculty imparts cutting-edge technology and communication skills, preparing students for both local and global job markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container text-center">
          <h2 className="section-title">Our Programs</h2>
          <p className="text-secondary mb-12 max-w-2xl mx-auto" style={{ fontSize: '1.1rem', margin: '0 auto 3rem auto', maxWidth: '800px', lineHeight: '1.6' }}>
            Become part of an exciting journey of learning across disciplines with a practical problem solving approach.
          </p>
          <div className="grid">
            <div className="card text-center" style={{ backgroundColor: '#fff' }}>
              <div className="font-bold text-dark text-4xl mb-4">MS</div>
              <h3 className="font-semibold text-primary text-xl mb-4">Islamic Banking & Finance</h3>
              <Link href="/programs/ms-ibf" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="card text-center" style={{ backgroundColor: '#fff' }}>
              <div className="font-bold text-dark text-4xl mb-4">BBA</div>
              <h3 className="font-semibold text-primary text-xl mb-4">Business Administration</h3>
              <Link href="/programs/bba" className="btn btn-outline">Learn More</Link>
            </div>
            <div className="card text-center" style={{ backgroundColor: '#fff' }}>
              <div className="font-bold text-dark text-4xl mb-4">BS CS</div>
              <h3 className="font-semibold text-primary text-xl mb-4">BS Computer Science</h3>
              <Link href="/programs/bs-cs" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section section-bg-light">
        <div className="container">
          <h2 className="section-title">News & Updates</h2>
          <div className="flex gap-8" style={{ alignItems: 'center', background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 className="font-bold text-dark text-2xl mb-4">Dr. Zeeshan's Insightful Tarbiyah Session</h3>
              <p className="text-secondary leading-relaxed mb-6">
                Dr. Zeeshan conducted an insightful Tarbiyah session at GU TECH, guiding students on personal growth, values, and leadership. A session filled with wisdom and inspiration!
              </p>
              <Link href="/news" className="font-semibold text-primary hover:underline">View All News &rarr;</Link>
            </div>
            <div style={{ flex: '1' }}>
               <div style={{ paddingBottom: '60%', background: '#eee', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
                 {/* Placeholder for Tarbiyah Image, assuming 2.png or similar is added later. */}
                 <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#999' }}>Educational Session Image</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--dark-gray)', color: 'var(--white)' }}>
        <div className="container">
          <div className="vc-section" style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
            <div className="vc-image-placeholder relative" style={{ alignSelf: 'center', backgroundColor: '#555' }}>
               {/* Stand in for Ehsannn.png */}
            </div>
            <div style={{ flex: 1 }}>
              <h3 className="text-3xl font-bold mb-2">Mufti Ehsan Waquar</h3>
              <p className="text-primary font-semibold text-xl mb-6">Vice Chancellor</p>
              <blockquote className="text-lg italic" style={{ lineHeight: '1.8', opacity: 0.9 }}>
                "At the heart of every educational endeavor is the mission to shape minds and hearts in ways that positively impact the world. At Al-Ghazali University, our vision goes beyond imparting academic knowledge. We aim to nurture individuals who not only excel in contemporary fields but are also deeply rooted in the moral and spiritual traditions."
              </blockquote>
              <Link href="/about" className="btn btn-outline mt-6" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>Read More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
