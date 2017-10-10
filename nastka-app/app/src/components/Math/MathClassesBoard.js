import React from 'react'

import styled from 'styled-components'
import board from '../../img/board@1280x800.svg'
import DataFetcher from '../../DataFetcher'
import MathEquation from './MathEquation'
import Button from '../Button'

const Background = styled.div`
background: url(${board}) no-repeat;
height:800px;
width:1280px;
margin:auto;
display: flex;
justify-content: center;
`;

const Board = styled.div`
color:#fff;
font-size: 120px;
display:flex;
justify-content:center;
align-items: center;
font-family: 'Crafty Girls', cursive;
// font-family: 'Leckerli One', cursive;
// font-family: 'Damion', cursive;
// font-family: 'Rock Salt', cursive;
// font-family: 'Give You Glory', cursive;
// font-family: 'Over the Rainbow', cursive;
// font-family: 'Mrs Sheppards', cursive;
// font-family: 'Dawning of a New Day', cursive;
`;

const Form = styled.form`
display:flex;
justify-content:space-around;
flex-direction:column;

`
const MathClassesBoard = () => {
  return (
    <Background>
      <Board>
        <Form>
          <DataFetcher
            dataUrl={'/data/equations.json'}
            component={MathEquation}
            propName="equations"
          />
          <Button clsName={"btn-transparent"} textContent={"Sprawdź"}/>
        </Form>
      </Board>
    </Background>
  )
}

export default MathClassesBoard