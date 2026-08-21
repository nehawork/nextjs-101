import MealsGrid from '@/components/MealsGrid';
import MealsHeader from '@/components/MealsHeader';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { getMeals } from '../../../lib/meals';
import MealsLoading from './loading-out';

export const metadata: Metadata = {
  title: 'All Meals',
  description:
    'Browser the delicious meals shared by a food-loving vibrant community.',
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main>
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
