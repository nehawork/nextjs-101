'use client';

export default function MealsError({ error }: { error: Error }) {
  return (
    <div className='error'>
      <h1>An Error Occurred!</h1>
      <p>{error.message}</p>
    </div>
  );
}
