import React from 'react'
import {connect} from 'react-redux'

import {equationGetAnswer} from '../../state/equationAnswer'

class Input extends React.Component {

  state = {
    answer: '',
  };

  render() {
    const handleChange = (e) => {
      this.setState({
        answer: e.target.value
      });
      this.props.equationGetAnswer(e.target.value)
    };
    return (
      <input value={this.state.answer}
             onChange={handleChange}
             className="equation-result--input no-spin"
             type="number"/>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    equationGetAnswer: (answer) => dispatch(equationGetAnswer(answer))
  })
)(Input)