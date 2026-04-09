import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function About() {
  return (
    <>
      {/* Extended Hero Section */}
      <section className="relative overflow-hidden">
        {/* Abstract solid gradient backplate mimicking our main campus layout without requiring the image itself */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(26,26,26,1) 0%, rgba(139,24,29,0.9) 100%)', zIndex: 0 }} />
        <div className="hero-campus-layout flex flex-col items-center justify-center" style={{ minHeight: '65vh' }}>
          <FadeUp className="container">
            <h1 className="uppercase text-5xl font-bold font-playfair mb-6" style={{ fontSize: '4.5rem' }}>
              Who We <span className="text-primary" style={{ backgroundColor: '#fff', padding: '0 1rem', display: 'inline-block', borderRadius: '4px' }}>Are</span>
            </h1>
            <p className="font-light text-xl max-w-3xl mx-auto" style={{ opacity: 0.95 }}>
              From our founding vision to the cutting edge of modern enterprise, GU TECH is infused with an undeniable spirit of academic rigor, integrity, and relentless possibility.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Leadership Quote Block */}
      <section className="section section-bg-light">
        <FadeUp className="container text-center">
           <h2 className="text-4xl font-playfair font-bold text-primary mb-8 leading-snug max-w-4xl mx-auto">
            "We are not merely building a university. We are nurturing a global ecosystem where profound traditional values intersect with the bleeding edge of technological and corporate innovation."
           </h2>
           <p className="text-lg text-dark font-medium uppercase tracking-widest mt-6" style={{ letterSpacing: '0.15em' }}>
             - Our Founding Vision
           </p>
        </FadeUp>
      </section>

      {/* Split Block 1 - Education */}
      <section className="section">
        <FadeUp className="container">
          <div className="split-section">
             <div className="flex-1">
               <h3 className="text-4xl font-playfair font-bold mb-6 text-dark" style={{ lineHeight: 1.3 }}>Excellence Across Disciplines</h3>
               <p className="text-lg text-dark mb-6 font-light leading-relaxed" style={{ opacity: 0.85 }}>
                 At GU TECH, our curriculum strips away archaic silos. We bring together computer science, business administration, and intensive data analytics into cohesive, market-driven learning paths. Our students don't just absorb theory; they apply their knowledge in real-time, building tangible solutions that matter in a rapidly evolving global market.
               </p>
               <Link href="/programs" className="btn btn-outline text-sm mt-4">Explore Academics</Link>
             </div>
             <div className="flex-1 w-full relative">
                <div className="image-placeholder-large w-full">
                  [ Image Placeholder: Students collaborating in a modern Stanford-style glass laboratory or coding center ]
                </div>
             </div>
          </div>
        </FadeUp>
      </section>

      {/* Split Block 2 - Innovation (Reversed) */}
      <section className="section section-bg-light">
        <FadeUp className="container">
          <div className="split-section reversed">
             <div className="flex-1">
               <h3 className="text-4xl font-playfair font-bold mb-6 text-dark" style={{ lineHeight: 1.3 }}>A Thriving Center for Innovation</h3>
               <p className="text-lg text-dark mb-6 font-light leading-relaxed" style={{ opacity: 0.85 }}>
                 Our dedicated I.I.C (Innovation & Incubation Center) stands as the absolute beacon of our entrepreneurial spirit. We provide the seed capital frameworks, top-tier global mentorship, and the sandbox environments entirely necessary for our scholars to forge their own startups. Here, we build the tech foundations of tomorrow before graduation.
               </p>
               <Link href="/departments/iic" className="btn btn-outline text-sm mt-4">Discover the I.I.C</Link>
             </div>
             <div className="flex-1 w-full relative">
                <div className="image-placeholder-large w-full">
                  [ Image Placeholder: Bright, modern Innovation & Incubation Workspace with technology whiteboards ]
                </div>
             </div>
          </div>
        </FadeUp>
      </section>

      {/* By the Numbers Stats Block */}
      <section className="section section-bg-dark">
        <div className="container py-12">
           <FadeUp>
             <h2 className="section-title text-white">Institutional Impact</h2>
           </FadeUp>
           <StaggerContainer className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', textAlign: 'center', marginTop: '5rem' }}>
              <StaggerItem>
                 <div className="text-6xl font-playfair font-bold text-accent mb-4">10:1</div>
                 <div className="text-xl font-light text-white opacity-80">Student to Faculty Ratio</div>
              </StaggerItem>
              <StaggerItem>
                 <div className="text-6xl font-playfair font-bold text-accent mb-4">65%</div>
                 <div className="text-xl font-light text-white opacity-80">Degree Finished in 2 Years</div>
              </StaggerItem>
              <StaggerItem>
                 <div className="text-6xl font-playfair font-bold text-accent mb-4">9+</div>
                 <div className="text-xl font-light text-white opacity-80">Cross-Disciplinary Labs</div>
              </StaggerItem>
              <StaggerItem>
                 <div className="text-6xl font-playfair font-bold text-accent mb-4">100%</div>
                 <div className="text-xl font-light text-white opacity-80">Commitment to Excellence</div>
              </StaggerItem>
           </StaggerContainer>
        </div>
      </section>

      {/* Campus & Community Quad Gallery */}
      <section className="section">
        <FadeUp className="container text-center">
           <h2 className="section-title">Campus Life & Community</h2>
           <p className="text-xl max-w-4xl mx-auto font-light text-dark mb-16 leading-relaxed" style={{ opacity: 0.85 }}>
             Nestled in a vibrant cultural hub, our campus layout is designed to be as inspiring as the curriculum itself. From sprawling quad gathering spaces to state-of-the-art computational libraries, GU TECH is where world-changing ideas are hypothesized, debated, and launched.
           </p>
           
           <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
              <StaggerItem>
                 <div className="image-placeholder-large w-full" style={{ minHeight: '350px' }}>
                    [ Image: Campus Architecture / Main Quad ]
                 </div>
              </StaggerItem>
              <StaggerItem>
                 <div className="image-placeholder-large w-full" style={{ minHeight: '350px' }}>
                    [ Image: State-of-the-Art Library / Study Hall ]
                 </div>
              </StaggerItem>
              <StaggerItem>
                 <div className="image-placeholder-large w-full" style={{ minHeight: '350px' }}>
                    [ Image: Diverse Student Life / Interaction ]
                 </div>
              </StaggerItem>
           </StaggerContainer>
        </FadeUp>
      </section>
    </>
  );
}
