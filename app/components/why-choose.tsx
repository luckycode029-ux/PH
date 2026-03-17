import { DollarSign, MapPin, Briefcase, Users, Clock } from 'lucide-react';
import styles from './why-choose.module.css';

const reasons = [
  {
    id: '1',
    icon: DollarSign,
    title: 'No Hidden Costs',
    description: "100% transparent pricing — what we quote is what you pay. No surprises, ever."
  },
  {
    id: '2',
    icon: MapPin,
    title: 'Faridabad Real Estate Experts',
    description: "Unmatched local knowledge of Faridabad's fastest-growing sectors and neighbourhoods."
  },
  {
    id: '3',
    icon: Briefcase,
    title: 'One-Stop Property Solutions',
    description: "Buy, sell, build, or renovate — we handle it all under one roof."
  },
  {
    id: '4',
    icon: Users,
    title: 'Trusted by 500+ Families',
    description: "A dedicated team of seasoned professionals committed to your success."
  },
  {
    id: '5',
    icon: Clock,
    title: 'On-Time, Every Time',
    description: "We respect your time. Projects delivered on schedule — no delays, no excuses."
  }
];

export function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Advantage</span>
          <h2 className={styles.title}>Why Choose Perfect Homes?</h2>
          <p className={styles.subtitle}>
            We combine local expertise with unmatched service standards to deliver results you can trust.
          </p>
        </div>
        <div className={styles.grid}>
          {reasons.map((reason) => (
            <div key={reason.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <reason.icon className={styles.icon} size={28} strokeWidth={2} />
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
