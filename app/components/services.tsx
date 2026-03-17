import { Home, Search, HardHat, Sofa, Paintbrush, Building2 } from 'lucide-react';
import { services } from '~/data/services';
import styles from './services.module.css';

const iconMap = {
  Home,
  Search,
  HardHat,
  Sofa,
  Paintbrush,
  Building2
};

export function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive real estate and construction solutions tailored to your needs
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={service.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} size={32} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
