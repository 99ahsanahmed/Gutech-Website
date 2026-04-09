export default function Admissions() {
  return (
    <>
      <div className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem' }}>
        <div className="container">
          <h1>Admissions</h1>
          <p>Your journey begins here.</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Join the Next Generation of Leaders</h2>
          <div className="card" style={{ padding: '3rem' }}>
            <h3 className="font-bold text-2xl mb-4 text-dark">Undergraduate Admissions</h3>
            <p className="card-text mb-4">
              We seek passionate individuals ready to dive deep into Computer Science, Data Science, and Management. 
              Our application process evaluates your academic excellence, extracurricular impact, and drive to create.
            </p>
            <button className="btn btn-primary mt-2">Apply for Undergraduate</button>
            
            <hr style={{ margin: '3rem 0', border: 'none', borderTop: '1px solid #eee' }} />
            
            <h3 className="font-bold text-2xl mb-4 text-dark">Graduate Admissions</h3>
            <p className="card-text mb-4">
              Advance your expertise with our rigorous MS programs in AI, Data Science, and Islamic Banking & Finance. 
              Join a vibrant research community.
            </p>
            <button className="btn btn-primary mt-2">Apply for Graduate</button>
          </div>
        </div>
      </section>
    </>
  );
}
