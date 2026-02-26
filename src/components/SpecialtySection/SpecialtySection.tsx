import styles from './SpecialtySection.module.css'
import { montserrat } from '@/app/layout'

export default function SpecialtySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${montserrat.className}`}>
          <span className={styles.light}>What is the</span>
          <br />
          <span className={styles.bold}>Specialty Of Us?</span>
        </h2>

        <div className={styles.carouselWrapper}>
          {/* Aquí irán las cards */}
        </div>

        <div className={styles.controls}>
          <button className={styles.arrow}>←</button>
          <button className={styles.arrow}>→</button>
        </div>
      </div>
    </section>
  )
}