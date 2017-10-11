import React from 'react'

import getRandomElement from '../../_utils/getRandomElement/getRandomElement'

const MathEquation = (props) => {

  const Input = () => {
    return <input className="equation-result--input no-spin" type="number"/>
  };

  const task = getRandomElement(props.equations);
  const equation = task.equation.split('').map((character) => {
    return character === '_' ? <Input/> : character
  });

  return (
    <div>
      {
        equation.map((character, index) => {
          return <span key={index}>{character}</span>
        })
      }
    </div>
  )
};

export default MathEquation