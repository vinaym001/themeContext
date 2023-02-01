import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickDarkThemeLogo = () => {
        toggleTheme()
      }

      const onClickLightThemeLogo = () => {
        toggleTheme()
      }

      return (
        <div>
          {isDarkTheme ? (
            <nav className="nav-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="nav-links">
                <Link to="/">
                  <li className="link-text-dark">Home</li>
                </Link>
                <Link to="/about">
                  <li className="link-text-dark">About</li>
                </Link>
              </ul>
              <button
                type="button"
                className="img-btn"
                onClick={onClickLightThemeLogo}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme"
                />
              </button>
            </nav>
          ) : (
            <nav className="nav-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="nav-links">
                <Link to="/">
                  <li className="link-text">Home</li>
                </Link>
                <Link to="/about">
                  <li className="link-text">About</li>
                </Link>
              </ul>
              <button
                type="button"
                className="img-btn"
                onClick={onClickDarkThemeLogo}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme"
                />
              </button>
            </nav>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
