import Link from 'next/link';
import styles from './meals-header.module.css';

const MealsHeader = () => {
  return (
    <header className={styles.headerWrapper}>
      <div>
        <h1 className={styles.headerText}>
          Delicious meals, created {` `}
          <span className={styles.textHighlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
      </div>
      <div>
        <Link href='/meals/share'>
          <button className={styles.primaryBtn}>
            Share Your Favorite Recipe
          </button>
        </Link>
      </div>
    </header>
  );
};

export default MealsHeader;
