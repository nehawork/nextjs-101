'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav-link.module.css';

const NavLinkForMainHeader = () => {
  const path = usePathname();

  return (
    <nav className='flex gap-8'>
      <Link
        href='/meals'
        className={`navLink ${path.startsWith('/meals') ? styles.activeLink : ''}`}
      >
        Browse Meals
      </Link>
      <Link
        href='/community'
        className={`navLink ${path === '/community' ? styles.activeLink : ''}`}
      >
        Foodies Community
      </Link>
    </nav>
  );
};

export default NavLinkForMainHeader;
