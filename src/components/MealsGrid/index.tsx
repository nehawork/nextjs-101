import { MealType } from '@/app/types/meals.types';
import MealItem from './MealItem';

const MealsGrid = ({ meals }: { meals: MealType[] }) => {
  return meals.map((meal) => (
    <MealItem
      key={meal.slug}
      title={meal.title}
      slug={meal.slug}
      image={meal.image}
      summary={meal.summary}
      creator={meal.creator}
    />
  ));
};

export default MealsGrid;
