import React from 'react'
import getRandomElement from '../../_utils/getRandomElement/getRandomElement'

const MathEquation = (props) => {
  console.log(props.equations);

 const task = getRandomElement(props.equations)
  console.log(task)
  return (
    <div>{task.equation}</div>
  )
};

export default MathEquation