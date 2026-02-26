import styles from "./SpecialtySection.module.css"
import Card from "@/components/Card/Card"

export default function SpecialtySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.light}>What is the</span>
          <br />
          <span className={styles.bold}>Specialty Of Us?</span>
        </h2>

        <div className={styles.carouselWrapper}>
          <Card
            image="/icon-4.png"
            title="Augmented Reality"
            description="We have the better team to develop all kind of augmented reality designs and takes the experience to other level"
          />

          <Card
            image="/icon-4.png"
            title="Quick Response"
            description="Anytime you want to talk we are going to be there for you"
          />

          <Card
            image="/icon-4.png"
            title="Great Communication"
            description="We maintain 24/7 communication to cover all your need for the project"
          />
        </div>
      </div>
    </section>
  )
}