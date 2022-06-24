import styled from "styled-components";

export const MainContainer = styled.div.attrs((props) => {
  const {
    theme: {
      background: { primary, ...restbg },
    },
  } = props;
  return {
    bg: restbg[props.bg] || primary,
  };
})`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.bg};
  justify-content: center;
`;

export const Message = styled.text.attrs((props) => {
    const {
      theme: {
        // Text: { default, ...resttc },
        size: { ex4lg, ...restts },
      },
    } = props;
    return {
    //   tc: resttc[props.tc] || secondary,
      ts: restts[props.ts] || ex4lg,
    };
  })`
    /* color: ${(props) => props.tc}; */
    color: beige;
    font-size: ${(props) => props.ts};
   align-self: center;
   font-weight: bolder;
   

`
export const ThanksButton = styled.button`
   background-color: black;
   color:white;
   border-radius: 5px;
   height:2.5rem;
   width:5rem;
  margin: 3rem;
  align-self:center;
  
   
`
