import { useTheme } from '../../../context/ThemeContext'
import './Body.css'

function Body({ children }) {
  const theme = useTheme()

  const bodyThemeStyle = {
    color: theme.colors.mainTextColor,
    '--title-text-color': theme.colors.titleTextColor,
    '--highlight-text-color': theme.colors.highlightTextColor,
  }

  return (
    <section className="body" style={bodyThemeStyle}>
      {children}
    </section>
  )
}

export default Body
