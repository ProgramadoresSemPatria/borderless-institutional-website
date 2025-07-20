import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Borderless Coding | Progamadores para o Mundo',
  description:
    'A Borderless é o primeiro ecossistema brasileiro que forma e conecta talentos de tecnologia com o mercado global, por meio de mentorias, bootcamps, aceleração e recrutamento sem fees.',
}

const themeInitScript = `
  try {
    const theme = localStorage.getItem('borderless-theme') || 'dark';
    document.documentElement.classList.add(theme);

    const userLang = navigator.language || navigator.userLanguage || 'en';
    document.documentElement.setAttribute('lang', userLang);
  } catch (e) {}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  )
}
