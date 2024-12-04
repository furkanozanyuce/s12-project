import './reset.css'
import './App.css'
import TopSection from './components/TopSection'
import SkillsSection from './components/SkillsSection'
import ProfileSection from './components/ProfileSection'
import { UserContextProvider } from './contexts/UserContext'
import ProjectsSection from './components/ProjectsSection'

function App() {

  return (
    <UserContextProvider>
      <TopSection />
      <SkillsSection />
      <ProfileSection />
      <ProjectsSection />
    </UserContextProvider>
  )
}

export default App
