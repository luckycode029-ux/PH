import { DollarSign, MapPin, Briefcase, Users, Clock } from 'lucide-react';
import styles from './why-choose.module.css';

const reasons = [
  {
    id: '1',
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden costs or surprises'
  },
  {
    id: '2',
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Deep knowledge of Faridabad real estate market'
  },
  {
    id: '3',
    icon: Briefcase,
    title: 'Complete Solutions',
    description: 'One-stop shop for all your property and construction needs'
  },
  {
    id: '4',
    icon: Users,
    title: 'Reliable Team',
    description: 'Experienced professionals committed to your success'
  },
  {
    id: '5',
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect deadlines and deliver projects as promised'
  }
];

export function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Perfect Homes?</h2>
        <div className={styles.grid}>
          {reasons.map((reason) => (
            <div key={reason.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <reason.icon className={styles.icon} size={36} />
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
