import './HeaderNavButton.css'

function HeaderNavButton({ label, navigateTo = '#' }) {
  const handleClick = () => {
    if (!navigateTo.startsWith('#')) {
      window.location.assign(navigateTo)
      return
    }

    const targetElement = document.querySelector(navigateTo)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <button className="header-nav-button" type="button" onClick={handleClick}>
      {label}
    </button>
  )
}

export default HeaderNavButton
