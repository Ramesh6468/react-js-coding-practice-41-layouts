// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configcontrolContainer">
          <div className="controlContainer">
            <h1 className="heading">Layout</h1>
            <div className="checkboxCard">
              <div className="inputCard">
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="input1"
                />
                <label className="label" htmlFor="input1">
                  Content
                </label>
              </div>
              <div className="inputCard">
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  type="checkbox"
                  id="input2"
                />
                <label className="label" htmlFor="input2">
                  Left Navbar
                </label>
              </div>
              <div className="inputCard">
                <input
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  type="checkbox"
                  id="input3"
                />
                <label className="label" htmlFor="input3">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
