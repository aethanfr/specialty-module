import styles from "./SpecialtySection.module.css"
import SpecialtyCarousel from "@/components/Carousel/SpecialtyCarousel"
import { fetchNews } from "@/lib/news"
import { SpecialtyItem } from "@/types/specialty"

export default async function SpecialtySection() {
  let items: SpecialtyItem[] = []

  try {
    items = await fetchNews()
  } catch {
    items = []
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.light}>What is the</span>
          <br />
          <span className={styles.bold}>Specialty Of Us?</span>
        </h2>
      </div>

      <SpecialtyCarousel items={items} />
    </section>
  )
}