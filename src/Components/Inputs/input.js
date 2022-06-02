import React from 'react'
import { ThemeProvider } from 'styled-components';
import styled from "styled-components"
import { theme } from '../../theme';

const Styledinput = styled.input.attrs(props => {
    const {theme:{size,text,background,color,bordersize}} = props;

    return{
        type:"text",
        size:size[props.size] ||  size.exlg,
        background: background[props.background] || background.main,
        bordersize:bordersize[props.bordersize] ||  bordersize.xs,
    }
})`
  font-size: ${props => props.size};
  background-color: ${props => props.background};
  border-radius: ${props=> props.bordersize};
  `
  const PasswordInput = styled(Styledinput).attrs({
    type: "password",
    // background: background[props.background]|| background.main,
  })`
   background-color: ${props => props.background};
   color: ${props => props.color};

  `
const Checkbox = styled(Styledinput).attrs({
    type:"checkbox",

})`


`
const Label=styled.label.attrs(props => {
    const {theme: {size,text,background,color,bordersize}}= props;
    return{
        type:text,
        color: color[props.color] ||  color.secondary,
    }
})`
color: ${props => props.color};
`
//  const LabelText = styled.span 

function Input() {
  return (
    
        <ThemeProvider theme={theme}>
            <div>
            <Styledinput placeholder='Input bhai'>
           
            </Styledinput>
            </div>
            <div>
            <Label>
            <Checkbox/>
            <Label>Checkbox</Label>
            
            </Label>
            </div>
           
           <PasswordInput placeholder=" password input"  />
           
          
             </ThemeProvider>
    
  )
}

export default Input