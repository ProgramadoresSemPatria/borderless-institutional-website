import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import { LanguageProvider } from './hooks/useLanguage'
import { ThemeProvider } from './hooks/useTheme'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <HeroSection />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
