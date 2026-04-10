'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoCall } from 'react-icons/io5';

import { navigation } from '@/lib/site-data';

function isActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<'programs' | 'departments' | null>(
    null,
  );

  function closeMenu() {
    setIsOpen(false);
    setMobileSection(null);
  }

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link className="brand-mark" href="/">
          <Image
            src="/university-logo.avif"
            alt="GU TECH"
            width={168}
            height={46}
            priority
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Link>

        <nav className="desktop-nav">
          <Link className={isActive(pathname, '/') ? 'is-active' : ''} href="/">
            Home
          </Link>
          <Link className={isActive(pathname, '/about') ? 'is-active' : ''} href="/about">
            About
          </Link>

          <div className="nav-group">
            <Link
              className={
                pathname.startsWith('/programs') ? 'nav-trigger is-active' : 'nav-trigger'
              }
              href="/programs"
            >
              Programs
            </Link>
            <div className="nav-panel">
              <Link href="/programs">All programs</Link>
              {navigation.programLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-group">
            <Link
              className={
                pathname.startsWith('/departments')
                  ? 'nav-trigger is-active'
                  : 'nav-trigger'
              }
              href="/departments"
            >
              Departments
            </Link>
            <div className="nav-panel">
              <Link href="/departments">All departments</Link>
              {navigation.departmentLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            className={isActive(pathname, '/admissions') ? 'is-active' : ''}
            href="/admissions"
          >
            Admissions
          </Link>
          <Link className={isActive(pathname, '/faculty') ? 'is-active' : ''} href="/faculty">
            Faculty
          </Link>
          <Link
            className={isActive(pathname, '/news') ? 'is-active' : ''}
            href="/news"
          >
            News
          </Link>
        </nav>

        <div className="nav-actions">
          <Link 
            className="button button--primary nav-cta-icon" 
            href="/contact"
            title="Contact Admissions"
          >
            <IoCall size={20} />
          </Link>
          <button
            aria-expanded={isOpen}
            className="mobile-toggle"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mobile-panel"
            exit={{ opacity: 0, y: -12 }}
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mobile-panel__inner">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>

              <div className="mobile-section">
                <button
                  className="mobile-section__toggle"
                  onClick={() =>
                    setMobileSection((current) =>
                      current === 'programs' ? null : 'programs',
                    )
                  }
                  type="button"
                >
                  Programs
                </button>
                <Link href="/programs" onClick={closeMenu}>
                  All programs
                </Link>
                {mobileSection === 'programs' ? (
                  <div className="mobile-links">
                    {navigation.programLinks.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeMenu}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="mobile-section">
                <button
                  className="mobile-section__toggle"
                  onClick={() =>
                    setMobileSection((current) =>
                      current === 'departments' ? null : 'departments',
                    )
                  }
                  type="button"
                >
                  Departments
                </button>
                <Link href="/departments" onClick={closeMenu}>
                  All departments
                </Link>
                {mobileSection === 'departments' ? (
                  <div className="mobile-links">
                    {navigation.departmentLinks.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeMenu}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <Link href="/admissions" onClick={closeMenu}>
                Admissions
              </Link>
              <Link href="/faculty" onClick={closeMenu}>
                Faculty
              </Link>
              <Link href="/executive-learning" onClick={closeMenu}>
                Executive Learning
              </Link>
              <Link href="/news" onClick={closeMenu}>
                News
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
