import React from 'react'
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import { theme } from '../../theme';
import { setTitleAction } from '../../Store/Action/action';
import { useSelector } from 'react-redux';
import { getTitle } from '../../Store/Selector';


 export const Styledinput = styled.input.attrs(props => {
    const {theme:{size,background,bordersize}} = props;

    return{
        size:size[props.size] ||  size.exlg,
        background: background[props.background] || background.main,
        bordersize:bordersize[props.bordersize] ||  bordersize.xs,
    }
})`
  font-size: ${props => props.size};
  background-color: ${props => props.background};
  border-radius: ${props=> props.bordersize};
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: 'Poppins', sans-serif;
  `
export const textArea = styled(Styledinput).attrs({
    type: "textarea",
  })`
   background-color: ${props => props.background};
   color: ${props => props.color};
  `
  const PasswordInput = styled(Styledinput).attrs({
    type: "password",
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

function Input() {
  const {title} = useSelector(getTitle)
  // console.log(title)
const dispatch =useDispatch()
useEffect(()=>{
dispatch(setTitleAction())
},[])
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
export default Input;