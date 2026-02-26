import styles from "./Card.module.css";
import { poppins } from "@/lib/fonts";

type Props = {
  image: string;
  title: string;
  description: string;
  isBlurred?: boolean;
};

export default function Card({ image, title, description, isBlurred = false }: Props) {
  return (
    <article className={`${styles.card} ${poppins.className}`}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={isBlurred ? { filter: 'blur(5px)', transform: 'scale(1.1)' } : undefined}
        />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </article>
  );
}
