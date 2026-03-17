import { MapPin, Check } from 'lucide-react';
import { properties } from '~/data/properties';
import styles from './projects.module.css';

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Explore our portfolio of premium properties and successful projects
          </p>
        </div>

        <div className={styles.grid}>
          {properties.map((property) => (
            <div key={property.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={property.image}
                  alt={property.title}
                  className={styles.image}
                />
                <div className={styles.badge}>{property.status}</div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{property.title}</h3>
                <div className={styles.location}>
                  <MapPin className={styles.locationIcon} size={16} />
                  {property.location}
                </div>
                <p className={styles.description}>{property.description}</p>

                <div>
                  <h4 className={styles.amenitiesTitle}>Amenities</h4>
                  <ul className={styles.amenities}>
                    {property.amenities.slice(0, 4).map((amenity, index) => (
                      <li key={index} className={styles.amenity}>
                        <Check className={styles.checkIcon} size={16} />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
