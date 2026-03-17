import { galleryImages } from '~/data/gallery';
import styles from './gallery.module.css';

export function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Work Gallery</h2>
          <p className={styles.subtitle}>
            A showcase of our completed projects and stunning designs
          </p>
        </div>

        <div className={styles.grid}>
          {galleryImages.map((image) => (
            <div key={image.id} className={styles.item}>
              <img
                src={image.url}
                alt={image.alt}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
