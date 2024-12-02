import './reset.css'
import './App.css'
import TopSection from './components/TopSection'
import SkillsSection from './components/SkillsSection'
import { UserContextProvider } from './contexts/UserContext'

function App() {

  return (
    <UserContextProvider>
      <TopSection />
      <SkillsSection />
    </UserContextProvider>
  )
}

export default App
