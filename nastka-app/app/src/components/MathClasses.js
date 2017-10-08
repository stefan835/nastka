import React from 'react'

import styled from 'styled-components'
import mathClass from '../img/math-class@1280x800.svg'

const MathBackground = styled.div`
background: url(${mathClass}) no-repeat;
height:800px;
width:1280px;
margin:auto;
`;

const MathClasses = () => {
  return (
    <MathBackground/>
  )
}

export default MathClasses