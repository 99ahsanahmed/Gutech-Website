import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="navbar text-white" style={{ backgroundColor: '#323232' }}>
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src="/GU TECH logo.avif" alt="GU TECH Logo" width={180} height={45} style={{ objectFit: 'contain' }} priority />
        </Link>
        <ul className="nav-links flex gap-6 items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li className="dropdown">
            <span className="dropdown-title">Programs</span>
            <div className="mega-menu text-dark">
              <Link href="/programs/bs-cs">BS Computer Science</Link>
              <Link href="/programs/bba">BBA</Link>
              <Link href="/programs/ms-ds">MS Data Science</Link>
              <Link href="/programs/ms-ai">MS Artificial Intelligence</Link>
              <Link href="/programs/ms-ibf">MS Islamic Banking & Finance</Link>
            </div>
          </li>
          <li className="dropdown">
            <span className="dropdown-title">Departments</span>
            <div className="mega-menu text-dark">
              <Link href="/departments/cs">Computer Science</Link>
              <Link href="/departments/management-sciences">Management Sciences</Link>
              <Link href="/departments/design-thinking">Design Thinking</Link>
              <Link href="/departments/continuing-education">Continuing Education</Link>
              <Link href="/departments/iic">I.I.C</Link>
            </div>
          </li>
          <li><Link href="/admissions">Admissions</Link></li>
          <li><Link href="/faculty">Our Faculty</Link></li>
          <li><Link href="/news">News</Link></li>
        </ul>
        <div className="flex gap-4">
          <Link href="/contact" className="btn btn-primary text-sm">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}
