import Link from 'next/link';
import NavLinkForMainHeader from './nav-link';

const MainHeader = () => {
  return (
    <header className='px-8 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center'>
      <Link href='/'>
        <h1 className='max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
          NextLevel Food
        </h1>
      </Link>
      <NavLinkForMainHeader />
    </header>
  );
};

export default MainHeader;
