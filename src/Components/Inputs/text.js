import React from 'react'
import { theme } from '../../theme'
import styled from "styled-components"
import { ThemeProvider } from 'styled-components'

const Styledtext = styled.div.attrs(props =>{
  const {theme : {size,text,background,color,bordersize}} = props;
   
  return{
      size:size[props.size]|| size.ex4lg,
      background: background[props.background] || background.main,
      color: color[props.color] ||  color.primary,
  }
})  `
font-size: ${props => props.size};
background-color: ${props => props.background};
color: ${props => props.color};
`

const Text = () => {


  return (
    
    <ThemeProvider theme={theme}>
    <Styledtext> Home </Styledtext>
    </ThemeProvider>
  
  )
}

export default Text