import React from 'react'

import styled from 'styled-components'
import board from '../../img/board@1280x800.svg'

const Background = styled.div`
background: url(${board}) no-repeat;
height:800px;
width:1280px;
margin:auto;
display: flex;
justify-content: center;
`;

const Equation = styled.div`
color:#fff;
font-size: 120px;
display:flex;
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

const MathClassesBoard = () => {
  return (
    <Background>
      <Equation>
        <div>12-5+8+2+1+5=_</div>
        {/*<div>18•2=_</div>*/}
        {/*<div>24:8+_=6</div>*/}
      </Equation>
    </Background>
  )
}

export default MathClassesBoard