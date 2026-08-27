import type { Metadata } from 'next';
import '../page.module.css';

export const metadata: Metadata = {
  title: 'Archive',
};

export default function RootLayout({
  archive,
  latest,
}: LayoutProps<'/archive'>) {
  return (
    <main className='p-8 w-full h-full'>
      {archive} {latest}
    </main>
  );
}
