import Link from 'next/link';

export default function Programs() {
  return (
    <>
      <div className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem' }}>
        <div className="container">
          <h1>Programs at GU TECH</h1>
          <p>Discover pathways constructed for the future.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Undergraduate</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">BS Computer Science</h3>
              <p className="card-text mb-4">A foundational degree covering algorithms, systems, and modern AI.</p>
              <Link href="#" className="btn btn-outline" style={{ display: 'inline-block' }}>View Curriculum</Link>
            </div>
            <div className="card">
              <h3 className="card-title">BBA</h3>
              <p className="card-text mb-4">Bachelor of Business Administration, blending conventional commerce with digital-first strategy.</p>
              <Link href="#" className="btn btn-outline" style={{ display: 'inline-block' }}>View Curriculum</Link>
            </div>
          </div>
          
          <h2 className="section-title" style={{ marginTop: '5rem' }}>Graduate</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">MS Data Science</h3>
              <p className="card-text">Advanced statistical learning, big data technologies, and predictive analytics.</p>
            </div>
            <div className="card">
              <h3 className="card-title">MS Artificial Intelligence</h3>
              <p className="card-text">Deep learning, reinforcement learning, and advanced neural architectures.</p>
            </div>
            <div className="card">
              <h3 className="card-title">MS Islamic Banking & Finance</h3>
              <p className="card-text">Merging traditional financial ethics with modern economic systems.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
