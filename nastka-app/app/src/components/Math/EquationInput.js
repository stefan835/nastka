import React from 'react'

class Input extends React.Component {

  state = {
    answer: '',
  };

  render() {
    const handleChange = (e) => {
      this.setState({
        answer: e.target.value
      });
    };
    return (
      <input value={this.state.answer}
             onChange={handleChange}
             className="equation-result--input no-spin"
             type="number"/>
    )
  }
}

export default Input