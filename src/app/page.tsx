import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.slideshow}>Hello</div>
      <div className={styles.homePageHeader}>
        <div className={styles.homePageHeaderContent}>
          <h1 className={styles.homePageTitle}>
            Next Level Food for NextLevel Foodies
          </h1>
          <p>Taste & Share food from all over the world</p>
        </div>
        <div className={styles.homePageHeaderActions}>
          <Link href='/community'>
            <button className={styles.secondaryBtn}>Join the Community</button>
          </Link>
          <Link href='/meals'>
            <button className={styles.primaryBtn}>Explore Meals</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
