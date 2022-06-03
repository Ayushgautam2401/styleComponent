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
    height: 100%;
    width: 85%;
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

