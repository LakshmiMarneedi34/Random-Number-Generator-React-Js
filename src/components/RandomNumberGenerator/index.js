// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  RandomNumber = () => Math.ceil(Math.random() * 100)

  onChangeRandomNumber = () => {
    const randomNumber = this.RandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="bg-image">
          <div className="inner-card-container">
            <h1 className="heading">Random Number</h1>
            <p className="description">
              Generate a random number in the range of 0 to 100
            </p>
            <button
              className="button"
              type="button"
              onClick={this.onChangeRandomNumber}
            >
              Generate
            </button>
            <p className="number">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
