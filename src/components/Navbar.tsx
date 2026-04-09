import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar text-dark">
      <div className="container nav-container flex items-center justify-between">
        <Link href="/" className="logo text-3xl font-bold">
          GU <span className="text-primary">TECH</span>
        </Link>
        <ul className="nav-links flex gap-6 items-center font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li className="dropdown">
            <span className="dropdown-title">Programs</span>
            <div className="mega-menu">
              <Link href="/programs/bs-cs">BS Computer Science</Link>
              <Link href="/programs/bba">BBA</Link>
              <Link href="/programs/ms-ds">MS Data Science</Link>
              <Link href="/programs/ms-ai">MS Artificial Intelligence</Link>
              <Link href="/programs/ms-ibf">MS Islamic Banking & Finance</Link>
            </div>
          </li>
          <li className="dropdown">
            <span className="dropdown-title">Departments</span>
            <div className="mega-menu">
              <Link href="/departments/cs">Computer Science</Link>
              <Link href="/departments/management-sciences">Management Sciences</Link>
              <Link href="/departments/design-thinking">Design Thinking Resources</Link>
              <Link href="/departments/continuing-education">Continuing Education Programs</Link>
              <Link href="/departments/iic">I.I.C</Link>
            </div>
          </li>
          <li><Link href="/admissions">Admissions</Link></li>
          <li><Link href="/faculty">Our Faculty</Link></li>
          <li><Link href="/news">News / Media</Link></li>
        </ul>
        <div className="flex gap-4">
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}
