import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          {isDarkTheme ? (
            <div className="nf-container-dark">
              <Navbar />
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="nf"
                />
                <h1 className="heading-dark">Lost Your Way?</h1>
                <p>we cannot seem to find the page you are looking for</p>
              </div>
            </div>
          ) : (
            <div className="nf-container">
              <Navbar />
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="nf"
                />
                <h1 className="heading">Lost Your Way?</h1>
                <p>we cannot seem to find the page you are looking for</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
