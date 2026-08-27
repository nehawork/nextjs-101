import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMeal } from '../../../../../../lib/meals';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <h1>Intercepted Image</h1>
      <Image width={300} height={300} src={meal.image} alt={meal.title} />
    </>
  );
}
