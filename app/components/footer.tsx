import { Home } from "lucide-react";
import styles from "./footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Home className={styles.logoIcon} />
              <span className={styles.span1}>Perfect Homes</span>
            </div>
            <p className={styles.tagline}>
              Your trusted partner for buying, selling, constructing, and designing dream homes in Faridabad.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.links}>
              <li>
                <a
                  href="#home"
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.links}>
              <li>
                <span className={styles.link}>Property Sale</span>
              </li>
              <li>
                <span className={styles.link}>Property Purchase</span>
              </li>
              <li>
                <span className={styles.link}>Construction</span>
              </li>
              <li>
                <span className={styles.link}>Interior Design</span>
              </li>
              <li>
                <span className={styles.link}>Renovation</span>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact Info</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <a href="tel:9711065465" className={styles.contactLink}>
                  9711065465
                </a>
              </div>
              <div className={styles.contactItem}>
                <a href="tel:9717978778" className={styles.contactLink}>
                  9717978778
                </a>
              </div>
              <div className={styles.contactItem}>
                <a href="mailto:perfecthomesmk@gmail.com" className={styles.contactLink}>
                  perfecthomesmk@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>Faridabad, Haryana</div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} Perfect Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
