import styled from 'styled-components';

export const HomepageLayout = styled.div`
    display: flex;
   height: 100vh;
    width: 100vw;
    background-color:#197A56;
    position: relative;
    justify-items: center;
    justify-content: center;


  `
export const InnerContainer = styled.div`display:flex;
    flex-direction: column;
     height: 60%;
     width: 30%;
     background-color: beige;
     border-radius: 5%;
    position: absolute;
    border: 2px solid black;
    align-self: center;

   
    
    

`
export const FormHeader = styled.div`display:flex;

  height: 20%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.text.attrs((props) => {
  const {
    theme: {
      Text: { secondary, ...resttc },
      size: { ex4lg, ...restts },
    },
  } = props;
  return {
    tc: resttc[props.tc] || secondary,
    ts: restts[props.ts] || ex4lg,
  };
})`
  color: ${(props) => props.tc};
  font-size: ${(props) => props.ts};
  font-weight: bold;
`;



export const FormContainer = styled.div` display:flex;
flex-direction: column;
 height:80%;
 width: 100%;
 justify-content: center;
 align-items: center;
 
 
 
`
export const InputLabel = styled.label.attrs((props) => {
  const {
    theme: {
      Text: { secondary, ...resttc },
      size: { lg, ...restts },
    },
  } = props;
  return {
    tc: resttc[props.tc] || secondary,
    ts: restts[props.ts] || lg,
  };
})`

color:${(props) => props.tc};;
  size:${(props) => props.ts};;
  padding-left: 16%;
  font-weight: bold;

  
`

export const Styledinput = styled.input.attrs(props => {
  const {theme:{size,background,bordersize}} = props;

  return{
      type:"text",
      size:size[props.size] ||  size.exlg,
      background: background[props.background] || background.main,
      bordersize:bordersize[props.bordersize] ||  bordersize.lg,
     
  }
})`
font-size: ${props => props.size};
border-radius: ${props=> props.bordersize};
border:2px solid #197A56  ;
height:2.5rem;
  margin-left:16%;
margin-right: 10%;
margin-bottom: 10%; 
align-self: center;
//position: absolute;
`
export const PasswordInput = styled(Styledinput).attrs({
  type: "password",
})`
 border:2px solid #197A56  ;
 color: ${props => props.color};

`
