import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './hooks/useLanguage'
import Header from './components/Header'
import Footer from './components/Footer'
import { headers } from 'next/headers'

export async function generateMetadata(): Promise<Metadata> {
  const acceptLanguage = (await headers()).get('accept-language') || 'en'
  const lang = acceptLanguage.startsWith('pt') ? 'pt' : 'en'

  if (lang === 'pt') {
    return {
      title: 'Borderless Coding',
      description:
        'A Borderless é o primeiro ecossistema brasileiro que forma e conecta talentos de tecnologia com o mercado global...',
    }
  } else {
    return {
      title: 'Borderless Coding',
      description:
        'Borderless is the first Brazilian ecosystem that trains and connects tech talents with the global market...',
    }
  }
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
