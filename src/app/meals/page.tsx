import MealsGrid from '@/components/MealsGrid';
import MealsHeader from '@/components/MealsHeader';
import { Suspense } from 'react';
import { getMeals } from '../../../lib/meals';
import MealsLoading from './loading-out';

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
