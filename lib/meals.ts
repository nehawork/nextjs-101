import {
  AddMealRequestWithImageFile,
  MealDetailsType,
  MealType,
} from '@/app/types/meals.types';
import sql from 'better-sqlite3';
import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';

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

export async function saveMeal(meal: AddMealRequestWithImageFile) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const titleSlug = slugify(meal.title, { lower: true });
  const sanitizedInstructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${titleSlug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving Image Failed.');
    }
  });

  db.prepare(
    `
    INSERT INTO meals
     (title, summary, instructions, creator, creator_email, image, slug)
     VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
     )

    `,
  ).run({
    ...meal,
    image: `/images/${fileName}`,
    instructions: sanitizedInstructions,
    slug: titleSlug,
  });
}
