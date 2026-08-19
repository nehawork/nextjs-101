import MealsGrid from '@/components/MealsGrid';
import MealsHeader from '@/components/MealsHeader';

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
