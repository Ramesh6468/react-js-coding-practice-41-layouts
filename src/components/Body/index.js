// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="bodyContainer">
          {showLeftNavbar ? (
            <div className="leftCard">
              <h1 className="text">Left Navbar Menu</h1>
              <ul className="listItems">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="contentCard">
              <h1 className="text">Content</h1>
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enium ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="rightCard">
              <h1 className="text">Right Navbar</h1>
              <div className="boxCard">
                <p className="box">Ad 1</p>
                <p className="box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
