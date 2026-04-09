import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="mb-4">
            <Image src="/GU TECH logo.avif" alt="GU TECH Logo" width={160} height={40} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </div>
          <p className="card-text text-white opacity-80" style={{opacity: 0.8}}>
            Al-Ghazali University (Main Campus)<br/>
            Board of Governors<br/>
            One Nation Foundation
          </p>
        </div>
        <div>
          <h4 className="footer-heading font-medium">Programs & Faculty</h4>
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
          <h4 className="footer-heading font-medium">Admissions & Info</h4>
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
          <h4 className="footer-heading font-medium">Connect</h4>
          <ul className="footer-links">
            <li>
              <Link href="/contact" className="btn btn-hero-outline mb-4 text-sm mt-2">
                Apply Now
              </Link>
            </li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/executive-learning">Executive Learning</Link></li>
            <li><Link href="/departments/iic">Innovation & Incubation Centre</Link></li>
            <li className="mt-6 mb-2 opacity-80">Follow Us:</li>
            <li><Link href="#">Instagram</Link> | <Link href="#">Facebook</Link></li>
            <li><Link href="#">Youtube</Link> | <Link href="#">LinkedIn</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom font-medium">
        &copy; {new Date().getFullYear()} GU TECH. All rights reserved.
      </div>
    </footer>
  );
}
