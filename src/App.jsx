import './reset.css'
import './App.css'
import TopSection from './components/TopSection'
import SkillsSection from './components/SkillsSection'
import ProfileSection from './components/ProfileSection'
import { LanguageContextProvider } from './contexts/LanguageContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import ProjectsSection from './components/ProjectsSection'
import FooterSection from './components/FooterSection'

function App() {

  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
      <TopSection />
      <SkillsSection />
      <ProfileSection />
      <ProjectsSection />
      <FooterSection />
      </ThemeContextProvider>
    </LanguageContextProvider>
  )
}

export default App
