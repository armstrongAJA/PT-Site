import { ThemeProvider } from './context/ThemeContext'
import Header from './components/molecules/Header/Header'
import HomePage from './pages/home/HomePage'
import './App.css'

function App() {
  const selectedThemePath = 'defaulttheme'

  return (
    <ThemeProvider selectedThemePath={selectedThemePath}>
      <div className="app-shell">
        <Header logoUrl="/" />
        <HomePage />
      </div>
    </ThemeProvider>
  )
}

export default App
