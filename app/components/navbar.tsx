import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Home, Phone, Menu } from 'lucide-react';
import { ColorSchemeToggle } from '~/components/ui/color-scheme-toggle/color-scheme-toggle';
import styles from './navbar.module.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>

      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Home className={styles.logoIcon} />
          <span>Perfect Homes</span>
        </Link>

        <div className={styles.nav}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#home" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                Projects
              </a>
            </li>
            <li>
              <a href="#gallery" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
          </ul>

          <a href="tel:9711065465" className={styles.cta}>
            <Phone size={18} />
            Call Now
          </a>

          <ColorSchemeToggle />

          <button className={styles.mobileMenuButton} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
