import React from 'react'
import HeroSection from './components/HeroSection'
import BorderlessArms from './components/BorderlessArms'
import TeamSection from './components/TeamSection'
import EducationDetails from './components/EducationDetails'
import ContentPrinciples from './components/ContentPrinciples'
import StartupIncubator from './components/StartupIncubator'
import RecruitmentSection from './components/RecruitmentSection'
import AboutSection from './components/AboutSection'
import StartupIncubatorExample from './components/StartupIncubationExample'
import SocialProof from './components/SocialProof'
import Events from './components/Events'
import HowWeCanHelp from './components/HowWeCanHelp'

function Home() {
  return (
    <main>
      <HeroSection />
      <BorderlessArms />
      <StartupIncubatorExample />
      <TeamSection />
      <SocialProof />
      <EducationDetails />
      <ContentPrinciples />
      <StartupIncubator />
      <RecruitmentSection />
      <AboutSection />
      <HowWeCanHelp />
      <Events />
    </main>
  )
}

export default Home
