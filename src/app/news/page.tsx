export default function News() {
  return (
    <>
      <div className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem', background: 'linear-gradient(135deg, #111 0%, #333 100%)' }}>
        <div className="container">
          <h1>News & Media</h1>
          <p>The latest updates from the heart of our campus.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid">
            <div className="card">
              <p className="text-sm text-secondary mb-2">March 15, 2026</p>
              <h3 className="card-title" style={{ fontSize: '1.25rem', color: 'var(--dark-gray)' }}>I.I.C Startup Raises $2M Seed Round</h3>
              <p className="card-text">A team of GU TECH Computer Science and BBA alumni successfully close their seed round for an AI-driven health tech platform.</p>
            </div>
            <div className="card">
              <p className="text-sm text-secondary mb-2">February 28, 2026</p>
              <h3 className="card-title" style={{ fontSize: '1.25rem', color: 'var(--dark-gray)' }}>New AI Lab inaugurated by the Dean</h3>
              <p className="card-text">The department of MS Artificial Intelligence has opened access to the region's largest GPU cluster for student research.</p>
            </div>
            <div className="card">
              <p className="text-sm text-secondary mb-2">January 10, 2026</p>
              <h3 className="card-title" style={{ fontSize: '1.25rem', color: 'var(--dark-gray)' }}>Annual Design Thinking Summit</h3>
              <p className="card-text">Over 500 industry professionals joined our faculty to discuss empathetic frameworks in corporate restructuring.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
