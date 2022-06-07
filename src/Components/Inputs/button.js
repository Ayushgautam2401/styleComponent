import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import styled from "styled-components"


export const Styledbutton = styled.button.attrs(props => {
    const {theme:{size,background,bordersize}} = props;

    return{
        type:"submit",
        size:size[props.size] ||  size.exlg,
        background: background[props.background] || background.primary,
        bordersize:bordersize[props.bordersize] ||  bordersize.xs,
    }
})`
  font-size: ${props => props.size};
  background-color: ${props => props.background};
  border-radius: ${props=> props.bordersize};
  border: none;
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  `


const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

function Button(){
return(
   <ThemeProvider theme={theme}>
        <Button>Normal Button</Button>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>

   </ThemeProvider>
)
}
 
export default Button