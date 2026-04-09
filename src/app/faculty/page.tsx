export default function Faculty() {
  return (
    <>
      <div className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem' }}>
        <div className="container">
          <h1>Our Faculty</h1>
          <p>World-class educators and researchers at the forefront of their fields.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Distinguished Scholars</h2>
          <div className="grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="card text-center">
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#eee', margin: '0 auto 1.5rem auto' }}></div>
                <h3 className="card-title mb-1" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Dr. Scholar Name</h3>
                <p className="text-secondary font-medium mb-3">Professor of Computer Science</p>
                <p className="card-text text-sm">Specializing in Artificial Intelligence and Machine Learning applications in modern contexts.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
