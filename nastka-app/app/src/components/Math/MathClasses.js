import React from 'react'

import styled from 'styled-components'
import mathClass from '../../img/math-class@1280x800.svg'
import MathClassesBoard from "./MathClassesBoard";
import DataFetcher from '../../DataFetcher'

const MathBackground = styled.div`
background: url(${mathClass}) no-repeat;
height:800px;
width:1280px;
margin:auto;
display:flex;
justify-content: center;
align-items:center;
`;

const MathClasses = () => {
  return (
    <MathBackground>
      <DataFetcher
        dataUrl={'/data/equations.json'}
        component={MathClassesBoard}
        propName="equations"
      />
    </MathBackground>
  )
};

export default MathClasses