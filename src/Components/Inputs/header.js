import React from 'react';
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';




export const Styledheader = styled.header.attrs(props =>{
    const {theme : {size,text,background,color,bordersize}} = props;
     
    return{
        size:size[props.size]|| size.ex3lg,
        color: color[props.color] ||  color.default,
    }
  })  `
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: bold;
  
  font-family: 'Poppins', sans-serif;
  `




 
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
  



function header() {
  return (
      <ThemeProvider theme={theme}>
    <Wrapper>
    <Styledheader>
      Hello World!
    </Styledheader>
  </Wrapper>
  </ThemeProvider>
  )
}

export default header