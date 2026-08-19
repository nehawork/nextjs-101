import { MealType } from '@/app/types/meals.types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './meals-grid.module.css';

const MealItem = ({ title, slug, image, summary, creator }: MealType) => {
  return (
    <article className={styles.mealItem}>
      <Image src={image} alt={title} width={200} height={150} />
      <div className={styles.content}>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>
            <button className={styles.primaryBtn}>View Details</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
