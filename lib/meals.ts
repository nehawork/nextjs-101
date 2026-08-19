import { MealDetailsType, MealType } from '@/app/types/meals.types';
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const stmt = db.prepare('SELECT * FROM meals');
  return stmt.all() as MealType[];
  // throw new Error('Simulated error for testing purposes'); // Simulate an error
}

export async function getMeal(slug: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db
    .prepare('SELECT * FROM meals WHERE slug = ?')
    .get(slug) as MealDetailsType;
}
