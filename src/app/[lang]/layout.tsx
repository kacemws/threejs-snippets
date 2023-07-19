import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import '@/assets/styles/app.scss';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  params: {
    lang: string;
  };
}

export const metadata = {
  title: 'Threejs follow up',
};

export default function RootLayout({ children, params: { lang } }: Props) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (lang !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
