import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState({
      message: "Goodbye"
    })
  }
  
  render() {
    const {message} = this.state
    return (
      <div>
        <div>{message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
