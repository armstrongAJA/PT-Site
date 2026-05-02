import LogoButton from '../../atoms/LogoButton/LogoButton'
import HeaderButtons from '../HeaderButtons/HeaderButtons'
import './Header.css'

function Header({ logoUrl = '/' }) {
  return (
    <header className="header">
      <div className="header__inner">
        <LogoButton navigateTo={logoUrl} />
        <HeaderButtons />
      </div>
    </header>
  )
}

export default Header
