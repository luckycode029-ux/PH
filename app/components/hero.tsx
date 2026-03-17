import { Phone, MessageCircle } from 'lucide-react';
import styles from './hero.module.css';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
          alt="Modern home"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          Build, Buy & Design Your Dream Home with Perfect Homes
        </h1>
        <p className={styles.subtitle}>
          We provide complete solutions — from property deals to construction and interiors.
        </p>
        <div className={styles.buttons}>
          <a href="tel:9711065465" className={styles.primaryButton}>
            <Phone size={20} />
            Call Now
          </a>
          <button onClick={scrollToContact} className={styles.secondaryButton}>
            <MessageCircle size={20} />
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
