import styles from './Card.module.css'
import { poppins } from '@/app/layout'

type Props = {
  image: string
  title: string
  description: string
}

export default function Card({ image, title, description }: Props) {
  return (
    <div className={`${styles.card} ${poppins.className}`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </div>
  )
}