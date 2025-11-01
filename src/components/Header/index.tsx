import IconSvg from '../IconSvg'
import './style.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <IconSvg name="logo-pc" alt="EAGLE SEVEN" className="logo-img logo-pc" />
          <IconSvg name="logo-mobile" alt="EAGLE SEVEN" className="logo-img logo-mobile" />
        </div>
      </div>
    </header>
  )
}

export default Header

