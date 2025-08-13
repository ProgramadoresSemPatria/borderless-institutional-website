import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './hooks/useLanguage'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Borderless Coding | Progamadores para o Mundo',
  description:
    'A Borderless é o primeiro ecossistema brasileiro que forma e conecta talentos de tecnologia com o mercado global, por meio de mentorias, bootcamps, aceleração e recrutamento sem fees.',
}

const themeInitScript = `
  try {
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
      <body className="antialiased text-white">
        <LanguageProvider>
          <div className="min-h-screen bg-borderless-background transition-colors duration-300">
            <Header />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
