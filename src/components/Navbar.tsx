'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { navigation, siteConfig } from '@/lib/site-data';

function isActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<'programs' | 'departments' | 'admissions' | null>(
    null,
  );

  function closeMenu() {
    setIsOpen(false);
    setMobileSection(null);
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobileViewport = window.matchMedia('(max-width: 960px)').matches;
    if (isOpen && isMobileViewport) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

          <div className="nav-group">
            <Link
              className={
                pathname.startsWith('/admissions') ? 'nav-trigger is-active' : 'nav-trigger'
              }
              href="/admissions"
            >
              Admissions
            </Link>
            <div className="nav-panel">
              {navigation.admissionsLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
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
            aria-label="Chat on WhatsApp admissions"
            className="button button--primary nav-cta-icon"
            href={siteConfig.whatsappHref}
            rel="noopener noreferrer"
            target="_blank"
            title="WhatsApp Admissions"
          >
            <FaWhatsapp size={20} />
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
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mobile-panel"
            exit={{ opacity: 0, y: -10, scale: 0.985 }}
            initial={{ opacity: 0, y: -10, scale: 0.985 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
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
                  aria-expanded={mobileSection === 'programs'}
                  className="mobile-section__toggle"
                  onClick={() =>
                    setMobileSection((current) =>
                      current === 'programs' ? null : 'programs',
                    )
                  }
                  type="button"
                >
                  <span>Programs</span>
                  <ChevronDown
                    className={
                      mobileSection === 'programs'
                        ? 'mobile-section__chevron is-open'
                        : 'mobile-section__chevron'
                    }
                    size={18}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileSection === 'programs' ? (
                    <motion.div
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      className="mobile-links"
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link href="/programs" onClick={closeMenu}>
                        All programs
                      </Link>
                      {navigation.programLinks.map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeMenu}>
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="mobile-section">
                <button
                  aria-expanded={mobileSection === 'departments'}
                  className="mobile-section__toggle"
                  onClick={() =>
                    setMobileSection((current) =>
                      current === 'departments' ? null : 'departments',
                    )
                  }
                  type="button"
                >
                  <span>Departments</span>
                  <ChevronDown
                    className={
                      mobileSection === 'departments'
                        ? 'mobile-section__chevron is-open'
                        : 'mobile-section__chevron'
                    }
                    size={18}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileSection === 'departments' ? (
                    <motion.div
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      className="mobile-links"
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link href="/departments" onClick={closeMenu}>
                        All departments
                      </Link>
                      {navigation.departmentLinks.map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeMenu}>
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="mobile-section">
                <button
                  aria-expanded={mobileSection === 'admissions'}
                  className="mobile-section__toggle"
                  onClick={() =>
                    setMobileSection((current) =>
                      current === 'admissions' ? null : 'admissions',
                    )
                  }
                  type="button"
                >
                  <span>Admissions</span>
                  <ChevronDown
                    className={
                      mobileSection === 'admissions'
                        ? 'mobile-section__chevron is-open'
                        : 'mobile-section__chevron'
                    }
                    size={18}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileSection === 'admissions' ? (
                    <motion.div
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      className="mobile-links"
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {navigation.admissionsLinks.map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeMenu}>
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
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
