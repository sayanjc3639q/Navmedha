"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navBrand}>
          <Image
            src="/assets/navmedha-logo.png"
            alt="Navmedha Logo"
            width={180}
            height={50}
            style={{ width: "auto", height: "45px" }}
            priority
            className={styles.navLogoImg}
          />
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/#about" className={styles.navLink}>About</Link>
          <Link href="/#categories" className={styles.navLink}>Categories</Link>
          <Link href="/#prizes" className={styles.navLink}>Prizes & MAR</Link>
          <Link href="/#mascots" className={styles.navLink}>Theme</Link>
          <Link href="/#rules" className={styles.navLink}>Rules</Link>
          <Link href="/#flow" className={styles.navLink}>Event Flow</Link>
        </nav>
        <Link href="/#categories" className="hero-btn" style={{ padding: "8px 24px", fontSize: "0.95rem" }}>
          Login
        </Link>
      </div>
    </header>
  );
}
