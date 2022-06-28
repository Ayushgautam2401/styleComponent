
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

 export const NavLink = styled(Link)`
  padding: 20px;
  color: black;
  text-decoration: none;

  :hover {
   // color: red;
    background-color: grey;
    /* background: blue; */
<<<<<<< HEAD
  }
  :active{
     background-color: grey;
   }

=======

   } 
    &.active{
    background-color:red;
   } 
>>>>>>> 2bd0b49d0eb2ae21b0ca7721f20f167c2343e98a

`;


 export const Nav = ({ className }) => {
  return (
    <div className={className}>
      <NavLink to="/input">Home</NavLink>
      <NavLink to="/temp">About</NavLink>
    </div>
  );
};

















// // import React from 'react'
// // import { ThemeProvider } from 'styled-components';
// // import { theme } from '../../theme';
// // import styled from "styled-components"


// // // const Styledlink = styled.div.attrs(props=>{
// // //     const {theme: {size,text,background,color,bordersize}}= props;
// // //     return{
// // //         size:size[props.size] || size.exlg,
// // //         color: color[props.color] || color.primary,
// // //     }
// // // })`
// // // font-size: ${props=> props.size};
// // // color: ${props => props.color};
// // // `

// // export const Button = styled.button`
// // width:100px;
// // height: 30px;
// // background-color:${(props)=>props.variant === 'outline'? '#FFF':'#4caf50'};
// // color:${(props)=>(props.variant === 'outline'? '#4caf50':'#FFF')}; 
// // `;
// // export const SimpleButton = styled(Button)`
// // background-image: linear-gradient(to right,#f6d365 0%,#fda085 100%);

// // `
// // export const Submit = styled.link   .attrs((props)=>({
// //     type:'submit'
// // }))`
// // box-shadow:0 9px #999;
// // &:active{
// //     background-color:${(props)=>props.variant === 'outline'? '#FFF':'#4caf50'};
// //     box-shadow:0 5px #666;
// //     transform:translateY(4px); 
// // }
// // `
// // const Link = () => {
// //   return (
// //    <ThemeProvider theme={theme}>
// //       <Button variant="outline">Again</Button>
// //        <Submit as='a' type='submit'>Home</Submit>

// //    </ThemeProvider>
// //   )
// // }

// // export default Link

