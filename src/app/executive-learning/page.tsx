export default function ExecutiveLearning() {
  return (
    <>
      <div className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem' }}>
        <div className="container">
          <h1>Executive Learning</h1>
          <p>Transformative education for current and future C-suite leaders.</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Elevate Your Leadership</h2>
          <p className="text-dark mb-8 text-center text-lg">
            Our Executive Learning modules are intensive, high-impact programs focusing on Digital Transformation, 
            AI Strategy for Business, and Advanced Financial Governance.
          </p>
          
          <div className="card mb-6">
            <h3 className="card-title">AI for Executives (3 Days)</h3>
            <p className="card-text">Demystifying machine learning strategies for non-technical executives to drive enterprise adoption.</p>
          </div>
          <div className="card mb-6">
            <h3 className="card-title">Modern Corporate Governance & Ethics</h3>
            <p className="card-text">Addressing global standards and the intersection with regional compliance requirements.</p>
          </div>
          
          <div className="text-center mt-8">
            <button className="btn btn-primary">Request Corporate Brochure</button>
          </div>
        </div>
      </section>
    </>
  );
}
