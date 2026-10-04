import Image from "next/image";
import { VAHAN_MASCOTS } from "@/config/categories";
import styles from "./MascotSection.module.css";

export function MascotSection() {
  return (
    <section id="mascots" className={styles.mascotSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionKicker}>✧ Sacred Companions & Symbolism ✧</span>
          <h2 className={styles.sectionTitle}>The Divine Vahanas</h2>
          <p className={styles.sectionSubtitle}>
            Each revered vehicle of Maa Durga and the pantheon of gods embodies a profound artistic and spiritual virtue.
          </p>
        </div>

        <div className={styles.mascotGrid}>
          {VAHAN_MASCOTS.map((m, idx) => (
            <div key={idx} className={styles.mascotCard}>
              <div className={styles.mascotImgWrap}>
                <Image
                  src={m.img}
                  alt={m.name}
                  width={190}
                  height={190}
                  className={styles.mascotImg}
                />
              </div>

              <div className={styles.mascotContent}>
                <span className={styles.deityTag}>{m.deity}</span>
                <h4 className={styles.mascotName}>{m.name}</h4>
                <p className={styles.mascotRole}>{m.role}</p>
                <div className={styles.symbolBadge}>
                  <span>✦ {m.symbol}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
