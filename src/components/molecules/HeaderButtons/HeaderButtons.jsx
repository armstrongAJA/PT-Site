import HeaderNavButton from '../../atoms/HeaderNavButton/HeaderNavButton'
import './HeaderButtons.css'

function HeaderButtons() {
  const headerButtons = [
    { label: 'About Us', navigateTo: '#about-us' },
    { label: 'Pricing', navigateTo: '#pricing' },
    { label: 'Contact Us', navigateTo: '#contact-us' },
  ]

  return (
    <nav className="header-buttons" aria-label="Primary">
      {headerButtons.map((button) => (
        <HeaderNavButton
          key={button.label}
          label={button.label}
          navigateTo={button.navigateTo}
        />
      ))}
    </nav>
  )
}

export default HeaderButtons
