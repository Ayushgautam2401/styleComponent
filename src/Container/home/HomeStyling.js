import styled from 'styled-components';

export const HomepageLayout = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color:rgb(66,94,150);
    position: relative;


  `
export const FormContainer = styled.div`display:flex;
    flex-direction: column;
     height: 80%;
     width: 30%;
     background-color: beige;
     border-radius: 5%;
     align-self: center;
     margin-left: 35%;
     margin-top: 5%;
    position: absolute;
    border: 2px solid black;


`
export const FormHeader = styled.div`display:flex;
  background-color: red;
  margin-top: 10%;
  height: 15%;
  width: 100%;
`
export const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "0.5em",
}))`
  color: red;
  font-size: 1em;
  border: 2px solid green ;
  border-radius: 8px;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;
export const Button = styled.button`
width:100px;
height: 30px;
background-color:${(props)=>props.variant === 'outline'? '#FFF':'#4caf50'};
color:${(props)=>(props.variant === 'outline'? '#4caf50':'#FFF')}; 
`;
