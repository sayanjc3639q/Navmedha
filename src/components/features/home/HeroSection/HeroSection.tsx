import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBgWrapper}>
        <Image
          src="/assets/herobackgroung.png"
          alt="Navmedha Durga Puja Festive Background"
          fill
          priority
          quality={100}
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroLogoMain}>
          <Image
            src="/assets/navmedha-logo.png"
            alt="NAVMEDHA"
            width={520}
            height={145}
            style={{ width: "100%", maxWidth: "520px", height: "auto" }}
            priority
            className={styles.heroLogoImg}
          />
        </div>

        <p className={styles.heroSubtitle}>
          Where Devotion Meets Digital Expression. An exclusive celebration of
          Art, Reels, Photography, and Storytelling during the divine festival of Durga Puja.
        </p>

        <div className={styles.heroCtaGroup}>
          <Link href="/#categories" className="hero-btn">
            <span>Explore Categories</span>
            <span>✦</span>
          </Link>
          <Link href="/#about" className="secondary-btn">
            <span>About Navmedha</span>
            <span>↓</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
