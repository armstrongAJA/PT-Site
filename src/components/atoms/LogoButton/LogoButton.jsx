import { useTheme } from '../../../context/ThemeContext'
import './LogoButton.css'

function LogoButton({ navigateTo = '/' }) {
  const theme = useTheme()

  const handleClick = () => {
    window.location.assign(navigateTo)
  }

  return (
    <button className="logo-button" type="button" onClick={handleClick}>
      {theme.logo.image ? (
        <img src={theme.logo.image} alt={theme.logo.label} className="logo-button__image" />
      ) : (
        <span className="logo-button__icon">{theme.logo.icon}</span>
      )}
    </button>
  )
}

export default LogoButton
