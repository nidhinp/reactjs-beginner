import React from 'react';

const Greet = (props) => {
  const {name, heroName} = props
  return (
    <div>
      <h1>Hello {name} aka <i>{heroName}</i></h1>
    </div>
  )
}

export default Greet
