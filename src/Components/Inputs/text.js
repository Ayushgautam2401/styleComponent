import React from 'react'
import { theme } from '../../theme'
import styled from "styled-components"
import { ThemeProvider } from 'styled-components'
import { useLocation } from 'react-router-dom'

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
const location = useLocation()

  return (
    
    <ThemeProvider theme={theme}>
       {location.pathname === `/text` ?(
        <p>Text components</p>  
          ):null}
    <Styledtext> Home </Styledtext>
    </ThemeProvider>
  
  )
}

export default Text