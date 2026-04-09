export default function Departments() {
  return (
    <>
      <div className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem' }}>
        <div className="container">
          <h1>Departments & Initiatives</h1>
          <p>Explore the hubs of activity across GU TECH.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Computer Science</h3>
              <p className="card-text">The core technical department housing our most advanced computing infrastructure and AI labs.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Management Sciences</h3>
              <p className="card-text">Driving business innovation, entrepreneurship, and research in modern global markets.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Design Thinking Resources</h3>
              <p className="card-text">Equipping students with empathy-driven problem-solving frameworks applied to tech and society.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Continuing Education</h3>
              <p className="card-text">Programs designed for working professionals seeking to upskill in emerging disciplines.</p>
            </div>
            <div className="card" style={{ borderTop: '4px solid var(--primary-red)' }}>
              <h3 className="card-title">I.I.C</h3>
              <p className="font-semibold text-primary mb-2">Innovation & Incubation Center</p>
              <p className="card-text">The launchpad for student-led startups and high-impact industrial partnerships. Funding, mentorship, and workspace provided.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
