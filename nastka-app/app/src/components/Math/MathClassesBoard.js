import React from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";

import board from '../../img/board@1280x800.svg'
import MathEquation from './MathEquation'
import Button from '../Button'
import {getTask} from "../../state/mathTask";
import getRandomElement from "../../_utils/getRandomElement/getRandomElement";

const Background = styled.div`
background: url(${board}) no-repeat;
height:800px;
width:1280px;
margin:auto;
display: flex;
justify-content: center;
align-items:center;
`;

const Board = styled.div`
color:#fff;
font-size: 120px;
display:flex;
justify-content:center;
align-items: center;
font-family: 'Crafty Girls', cursive;
`;

const Form = styled.form`
display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
`;

class MathClassesBoard extends React.Component {
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      this.props.getTask(getRandomElement(this.props.equations))
    };

    return (
      <Background>
        <Board>
          <Form onSubmit={handleSubmit}>
            <MathEquation equations={this.props.equations}/>
            <Button clsName={"btn-transparent"} textContent={"Sprawdź"}/>
          </Form>
        </Board>
      </Background>
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
)(MathClassesBoard)