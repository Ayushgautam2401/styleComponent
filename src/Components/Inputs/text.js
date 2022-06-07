import React from 'react'
import { theme } from '../../theme'
import styled from "styled-components"
import { ThemeProvider } from 'styled-components'

 export const Styledtext = styled.div.attrs(props =>{
  const {theme : {size,text,background,color,bordersize}} = props;
   
  return{
      size:size[props.size]|| size.exlg,
      // background: background[props.background] || background.main,
      color: color[props.color] ||  color.default,
  }
})  `
font-size: ${props => props.size};
/* background-color: ${props => props.background}; */
color: ${props => props.color};
font-weight: bold;

font-family: 'Poppins', sans-serif;
`

const Text = () => {
  return (
    
    <ThemeProvider theme={theme}>
    <Styledtext> Home </Styledtext>
    </ThemeProvider>
  
  )
}

export default Text