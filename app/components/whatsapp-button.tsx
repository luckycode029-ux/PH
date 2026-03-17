import { MessageCircle } from 'lucide-react';
import styles from './whatsapp-button.module.css';

export function WhatsAppButton() {
  const phoneNumber = '919711065465';
  const message = 'Hello! I am interested in your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className={styles.icon} size={32} />
    </a>
  );
}
