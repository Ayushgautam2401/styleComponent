import React from 'react'
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import styled from "styled-components"
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();
  console.log(location)
  return (
   <ThemeProvider theme={theme}>
      {location.pathname === `/link` ?(
        <p>Link components</p>  
          ):null}
       <Styledlink>Home</Styledlink>

   </ThemeProvider>
  )
}

export default Link