export default function About() {
  return (
    <>
      <div className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem' }}>
        <div className="container">
          <h1>About GU TECH</h1>
          <p>Inspiring minds, advancing the frontier of knowledge.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Vision</h2>
          <p className="text-dark" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.8', textAlign: 'center' }}>
            To be a globally recognized university that converges cutting-edge technology 
            and modern management practices. GU TECH strives to cultivate an ecosystem 
            of innovation, where tomorrow's leaders are equipped to solve the most 
            complex challenges of the 21st century.
          </p>
          <div className="grid mt-8" style={{ marginTop: '4rem' }}>
            <div className="card">
              <h3 className="card-title">Academic Excellence</h3>
              <p className="card-text">We uphold the highest standards of rigor in our academic programs, blending theoretical depth with practical application.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Research & Innovation</h3>
              <p className="card-text">Home to state-of-the-art labs and the Innovation & Incubation Center (I.I.C), we push boundaries daily.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Diversity & Inclusion</h3>
              <p className="card-text">We believe that a diverse community of perspectives is the catalyst for genuine innovation and societal progress.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
