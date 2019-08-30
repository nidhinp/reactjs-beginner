import React, { Component } from 'react'

export class ChildComp extends Component {
  render() {
    const {greetHandler} = this.props

    return (
      <div>
        <button onClick={() => greetHandler("child")}>Greet parent</button>
      </div>
    )
  }
}

export default ChildComp
