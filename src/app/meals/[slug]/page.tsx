export default async function MealDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <div>Meal Details for {slug}</div>;
}
