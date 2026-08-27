import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Archive',
};

export default function RootLayout({
  children,
  modal,
}: LayoutProps<'/meals/[slug]'>) {
  return (
    <main className='p-8 w-full h-full'>
      {children} {modal}
    </main>
  );
}
