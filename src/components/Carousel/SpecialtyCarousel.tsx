"use client"

import { useMemo, useState } from "react"
import Card from "@/components/Card/Card"
import styles from "./SpecialtyCarousel.module.css"
import { SpecialtyItem } from "@/types/specialty"

type Props = {
  items: SpecialtyItem[]
}

function mod(n: number, m: number) {
  return ((n % m) + m) % m
}

function circularOffset(index: number, active: number, total: number) {
  const raw = index - active
  const half = Math.floor(total / 2)

  let offset = raw
  if (offset > half) offset -= total
  if (offset < -half) offset += total
  return offset
}

export default function SpecialtyCarousel({ items }: Props) {
  const total = items.length
  const [active, setActive] = useState(0)

  const visibleItems = useMemo(() => {
    return items.map((item, index) => {
      const offset = circularOffset(index, active, total)
      return { item, offset }
    })
  }, [items, active, total])

  function prev() {
    setActive((a) => mod(a - 1, total))
  }

  function next() {
    setActive((a) => mod(a + 1, total))
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.stage}>
        {visibleItems.map(({ item, offset }) => {
          const isVisible = Math.abs(offset) <= 2

          const positionClass =
            offset === 0
              ? styles.center
              : offset === -1
              ? styles.left1
              : offset === 1
              ? styles.right1
              : offset === -2
              ? styles.left2
              : offset === 2
              ? styles.right2
              : styles.hidden

          return (
            <div
              key={item.id}
              className={`${styles.slot} ${positionClass} ${
                isVisible ? styles.visible : styles.hidden
              }`}
              style={{ zIndex: 10 - Math.abs(offset) }}
            >
              <Card
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          )
        })}
      </div>

      <div className={styles.controls}>
        <button onClick={prev} className={styles.arrow}>
          ←
        </button>
        <button onClick={next} className={styles.arrow}>
          →
        </button>
      </div>
    </div>
  )
}