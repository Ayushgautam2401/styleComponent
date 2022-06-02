import React from 'react'
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import styled from "styled-components"


const Styledlink = styled.div.attrs(props=>{
    const {theme: {size,text,background,color,bordersize}}= props;
    return{
        size:size[props.size] || size.exlg,
        color: color[props.color] || color.primary,
    }
})`
font-size: ${props=> props.size};
color: ${props => props.color};
`
const Link = () => {
  return (
    // <div>
   <ThemeProvider theme={theme}>
       <Styledlink>Home</Styledlink>

   </ThemeProvider>
    // </div>
  )
}

export default Link