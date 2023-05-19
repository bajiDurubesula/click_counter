// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <p className="message">The Button has been clicked {count} times</p>
        <p>Click the button to increase the count</p>
        <button className="buttonEle" onClick={this.increaseCount}>
          click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
