import React from 'react'

import getRandomElement from '../../_utils/getRandomElement/getRandomElement'
import EquationInput from './EquationInput'


const MathEquation = (props) => {

  const task = getRandomElement(props.equations);
  const equation = task.equation.split('').map((character) => {
    return character === '_' ? <EquationInput/> : character

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