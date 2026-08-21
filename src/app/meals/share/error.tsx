'use client';

export default function ShareMealsError({ error }: { error: Error }) {
  return (
    <div className='error'>
      <h1>An Error Occurred!</h1>
      <p>{error.message || 'Failed to Create Meal.'}</p>
    </div>
  );
}
