import React from 'react'
import { theme } from '../../theme'
import styled from "styled-components"
import { ThemeProvider } from 'styled-components'
import { useLocation } from 'react-router-dom'

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
<<<<<<< HEAD
const location = useLocation()

=======
>>>>>>> b85157dd9541bf14192d179d99b47f78030099f3
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