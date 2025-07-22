import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BorderlessArms from './components/BorderlessArms'
import TeamSection from './components/TeamSection'
import EducationDetails from './components/EducationDetails'
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
            <BorderlessArms />
            <TeamSection />
            <EducationDetails />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
