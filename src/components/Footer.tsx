import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
           {/* Replace with next/image later if desired */}
          <h3 className="footer-heading font-bold text-3xl mb-4" style={{ color: '#fff' }}>GU <span className="text-primary">TECH</span></h3>
          <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
            Al-Ghazali University (Main Campus)<br/>
            Board of Governors<br/>
            One Nation Foundation
          </p>
        </div>
        <div>
          <h4 className="footer-heading font-semibold">Programs & Faculty</h4>
          <ul className="footer-links">
            <li><Link href="/faculty">Our Faculty</Link></li>
            <li><Link href="/programs/bba">BBA</Link></li>
            <li><Link href="/programs/bs-cs">BS Computer Science</Link></li>
            <li><Link href="/programs/ms-ibf">MS Islamic Banking & Finance</Link></li>
            <li><Link href="/departments/cs">Department of Computer Science</Link></li>
            <li><Link href="/departments/management-sciences">Department of Management Sciences</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading font-semibold">Admissions & Info</h4>
          <ul className="footer-links">
            <li><Link href="/admissions">Admission Process</Link></li>
            <li><Link href="#">Fee Structure</Link></li>
            <li><Link href="#">Life At GU Tech</Link></li>
            <li><Link href="#">Campus Tour</Link></li>
            <li><Link href="/news">News & Updates</Link></li>
            <li><Link href="#">Scholarships & Financial Aid</Link></li>
            <li><Link href="#">GSAT (Standard Admission Test)</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading font-semibold">Connect</h4>
          <ul className="footer-links">
            <li><Link href="/contact" className="btn btn-outline mb-2" style={{ borderColor: 'var(--white)', color: 'var(--white)', display: 'inline-block', padding: '0.5rem 1rem' }}>Apply Now</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/executive-learning">Executive Learning</Link></li>
            <li><Link href="/departments/iic">Innovation & Incubation Centre</Link></li>
            <li className="mt-4" style={{ opacity: 0.8 }}>Follow Us:</li>
            <li><Link href="#">Instagram</Link> | <Link href="#">Facebook</Link></li>
            <li><Link href="#">Youtube</Link> | <Link href="#">LinkedIn</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        &copy; {new Date().getFullYear()} GU TECH. All rights reserved.
      </div>
    </footer>
  );
}
