import type { Metadata } from 'next'
import { Locale, i18n } from '../../../i18n-config';

import './globals.css'
import './../styles/index.scss'
import SocialMediaLinks from '../../components/SocialMediaLinks';
import BackgroundImages from '../../components/BackgroundImage';

export const metadata: Metadata = {
  title: 'Genevieve Perron Migneron - Portfolio',
  description: 'Senior Manager - Web Development',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <meta property="og:title" content="Genevieve Perron Migneron - Portfolio" />
      <meta property="og:description" content="Senior Manager - Web Development" />
      <meta property="og:image" content="https://www.gen-migneron.com/og.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Genevieve Perron Migneron - Portfolio" />
      <meta name="twitter:description" content="Senior Manager - Web Development" />
      <meta name="twitter:image" content="https://www.gen-migneron.com/og.jpg" />
      <body className="flex items-center justify-center h-screen font-sans">
        <BackgroundImages />
        <SocialMediaLinks />
        {children}
      </body>
    </html>
  )
}
