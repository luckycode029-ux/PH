import { CheckCircle } from 'lucide-react';
import styles from './about.module.css';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1000&fit=crop"
            alt="Construction and architecture"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>About Perfect Homes</h2>
          <p className={styles.description}>
            We help clients in buying, selling, constructing, and designing their dream homes with transparency and expertise.
          </p>

          <ul className={styles.features}>
            <li className={styles.feature}>
              <CheckCircle className={styles.checkIcon} size={24} />
              Trusted Local Experts
            </li>
            <li className={styles.feature}>
              <CheckCircle className={styles.checkIcon} size={24} />
              End-to-End Solutions
            </li>
            <li className={styles.feature}>
              <CheckCircle className={styles.checkIcon} size={24} />
              Affordable & Quality Work
            </li>
          </ul>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Clients Served</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
