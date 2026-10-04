import Image from "next/image";
import styles from "./RulesSection.module.css";

export function RulesSection() {
  return (
    <section id="rules" className={styles.rulesSection}>
      <div className={styles.container}>
        <div className={styles.rulesCard}>
          <div className={styles.rulesLeft}>
            <Image
              src="/assets/rulebookicon.png"
              alt="Rulebook"
              width={200}
              height={200}
              className="floating-delayed"
            />
            <h3>Event Guidelines & Rules</h3>
            <p>Please review these simple rules before submitting your artwork or content.</p>
          </div>
          <div className={styles.rulesRight}>
            <ul className={styles.rulesList}>
              <li>
                <span className={styles.ruleNum}>1</span>
                <div>
                  <strong>Original Work Only:</strong> All entries must be original creations by the participant. Plagiarism will lead to immediate disqualification.
                </div>
              </li>
              <li>
                <span className={styles.ruleNum}>2</span>
                <div>
                  <strong>Durga Puja / Festive Theme:</strong> Entries must celebrate Durga Puja, Bengali traditions, festive celebrations, emotion, or cultural heritage.
                </div>
              </li>
              <li>
                <span className={styles.ruleNum}>3</span>
                <div>
                  <strong>Formats & Resolution:</strong> Artworks and Photos should be high resolution (JPEG/PNG). Reels should be in MP4 format (9:16 aspect ratio).
                </div>
              </li>
              <li>
                <span className={styles.ruleNum}>4</span>
                <div>
                  <strong>Multiple Submissions:</strong> You may submit entries in multiple categories using the same email address.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
