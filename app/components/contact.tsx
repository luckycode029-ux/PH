import { Phone, Mail, MapPin, Send } from 'lucide-react';
import styles from './contact.module.css';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Ready to start your dream project? Contact us today for a free consultation
          </p>
        </div>

        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <Send size={20} />
              Send Message
            </button>
          </form>

          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <Phone className={styles.infoIcon} size={24} />
                Phone
              </h3>
              <p className={styles.infoItem}>
                <a href="tel:9711065465" className={styles.infoLink}>
                  Manoj Kumar: 9711065465
                </a>
              </p>
              <p className={styles.infoItem}>
                <a href="tel:9717978778" className={styles.infoLink}>
                  Prema Sharma: 9717978778
                </a>
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <Mail className={styles.infoIcon} size={24} />
                Email
              </h3>
              <p className={styles.infoItem}>
                <a href="mailto:perfecthomesmk@gmail.com" className={styles.infoLink}>
                  perfecthomesmk@gmail.com
                </a>
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <MapPin className={styles.infoIcon} size={24} />
                Address
              </h3>
              <p className={styles.infoItem}>
                61, Surya Nagar, Sector-91, Phase-II,<br />
                Faridabad-121013 (HR), India
              </p>
            </div>

            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004892707!2d77.04417!3d28.40806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc9f0f26a303%3A0x8a6bc4f3f228a4e0!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
              loading="lazy"
              title="Perfect Homes Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
