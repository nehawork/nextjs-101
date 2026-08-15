import Link from 'next/link';

const MainHeader = () => {
  return (
    <header className='px-8 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center'>
      <Link href='/'>
        <h1 className='max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
          NextLevel Food
        </h1>
      </Link>
      <nav className='flex gap-8'>
        <Link
          className='text-lg font-medium hover:underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600'
          href='/meals'
        >
          Browse Meals
        </Link>
        <Link
          className='text-lg font-medium hover:underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600'
          href='/community'
        >
          Foodies Community
        </Link>
      </nav>
    </header>
  );
};

export default MainHeader;
