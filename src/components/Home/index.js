import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          {isDarkTheme ? (
            <div className="home-container-dark">
              <Navbar />
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="home"
                />
                <h1 className="heading-dark">Home</h1>
              </div>
            </div>
          ) : (
            <div className="home-container">
              <Navbar />
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="home"
                />
                <h1 className="heading">Home</h1>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
