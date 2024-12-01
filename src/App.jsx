import './reset.css'
import './App.css'
import TopSection from './components/TopSection'
import { UserContextProvider } from './contexts/UserContext'

function App() {

  return (
    <UserContextProvider>
      <TopSection />
    </UserContextProvider>
  )
}

export default App
