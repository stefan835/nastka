import React from 'react'

import EquationInput from './EquationInput'
import getRandomElement from "../../_utils/getRandomElement/getRandomElement";
import {connect} from "react-redux";
import {getTask} from "../../state/mathTask";

class MathEquation extends React.Component {

  componentDidMount() {
    this.props.getTask(getRandomElement(this.props.equations))
  }

  render() {
    const equation = this.props.task.task.equation.split('').map((character) => {
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
}


export default connect(
  state => ({
    task: state.task
  }),
  dispatch => ({
    getTask: (task) => dispatch(getTask(task))
  })
)(MathEquation)

