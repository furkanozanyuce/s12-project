import './reset.css'
import './App.css'
import TopSection from './components/TopSection'
import SkillsSection from './components/SkillsSection'
import ProfileSection from './components/ProfileSection'
import { UserContextProvider } from './contexts/UserContext'

function App() {

  return (
    <UserContextProvider>
      <TopSection />
      <SkillsSection />
      <ProfileSection />
    </UserContextProvider>
  )
}

export default App
