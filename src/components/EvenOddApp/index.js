// Write your code here

import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNUmber = () => Math.ceil(Math.random() * 100)

  increment = () => {
    const random = this.getRandomNUmber()
    this.setState(prevState => ({count: prevState.count + random}))
  }

  render() {
    const {count} = this.state
    const evenOddText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {evenOddText}</p>
          <button type="button" className="button" onClick={this.increment}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
