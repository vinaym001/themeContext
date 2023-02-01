import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          {isDarkTheme ? (
            <div className="about-container-dark">
              <Navbar />
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="about"
                />
                <h1 className="heading-dark">About</h1>
              </div>
            </div>
          ) : (
            <div className="about-container">
              <Navbar />
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="about"
                />
                <h1 className="heading">About</h1>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
