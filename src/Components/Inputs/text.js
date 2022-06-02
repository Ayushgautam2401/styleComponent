import React from 'react'
import { theme } from '../../theme'
import { text } from './styles'
import styled from "styled-components"
import { ThemeProvider } from 'styled-components'
// import { Styledtext } from './styles'

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
    // <div>
    // <Input placeholder="Testing style  " size="2em" />
    <ThemeProvider theme={theme}>
    <Styledtext> Home </Styledtext>
    </ThemeProvider>
      
    // </div>
  )
}

export default Text