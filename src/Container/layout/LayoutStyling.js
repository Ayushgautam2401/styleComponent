import styled from 'styled-components';

export const Layout = styled.div`
  display: flex ;
  flex-direction: column;
  height: 100vh;

`

export const Header = styled.header
  .attrs(props => {
    const { theme: { background: { main, ...restbg } } } = props;
    return {
      bg: restbg[props.bg] || main,
    }
  })
  `
    display: flex;
    flex-direction: row;
    height: 60px;
    background-color: ${props => props.bg};
 `


export const DisplayArea = styled.div`
    display: flex;
    flex-direction: row;
    height: calc(100% - 120px);
    
`
export const Sidebar = styled.div
  .attrs(props => {
    const { theme: { background: { primary, ...restBg } } } = props;
    return {
      bg: restBg[props.bg] || primary,
    }
  })

  `
    width: 15%;
    height: 100%;
    background-color: ${props => props.bg};
    overflow:auto;
`

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    height:100% ;
    width: 85%;
    overflow: auto;

`
export const TitleBar = styled.div `
    display: flex;
    flex-direction: row;
    //position:sticky;
    width: 100%;
    height: 50px;
    background-color: beige;
    border-radius: 0.8rem;
   // border: 1px solid black;

`
export const TitleLabel = styled.text
.attrs(props => {
  const { theme: { Text: { secondary, ...resttc }, size:{ex2lg, ...restts} } } = props;
  return {
    tc: resttc[props.tc] || secondary,
    ts: restts[props.ts] || ex2lg,
  }
})
`
color:${props => props.tc};
font-size:${props => props.ts};
width: 20%;
float: left;
padding-left:1rem;
padding-top:0.5rem;
font-weight:bold;


    


`
export const Content = styled.div`
   display: flex;
   width: 100%;
   height:calc(100% - 50px);
  // border: 2px solid blue;
   overflow: auto;


`


export const Footer = styled.footer
  .attrs(props => {
    const { theme: { background } } = props;
    return {
      bg: background[props.bg] || background.main,
    }
  })
  `
    height: 60px;
    background-color: ${props => props.bg};
`

