import styled from 'styled-components';

export const Layout = styled.div `
     display: flex ;
     flex-direction: column;
    height: 100vh;
    width:100%;
    viewport-fit: inherit;

`

export const Header = styled.header
.attrs(props => {
    const {theme: {background}} = props;
    return {
        bg: background[props.bg] || background.main,  
    }
}) 
`
    display: flex;
    flex-direction: row;

    width: 100vw;
    margin-top: 0vh;
    min-height: 60px;
    background-color: ${props => props.bg};
 `


export const DisplayArea = styled.div `
    display: flex;
    flex-direction: row;
    width:100vw;
    height: calc(100% - 120px);
    
    
`
export const Sidebar = styled.div 
.attrs(props => {
    const {theme: {background}} = props;
    return {
        bg: background[props.bg] || background.primary,  
    }
}) 

`
    display: flex;
    
    width: 15%;
    height: calc(100% - 120px);
    
    background-color: ${props => props.bg};
    position: fixed;
    overflow:hidden;
`

export const ContentArea = styled.div `
    display: flex;
   
    height: 100%;
    width: 85%;
   // float: right ;
    overflow: auto;
    margin-right: 0%;
    margin-left: 15%;


`

export const Footer = styled.footer 
.attrs(props => {
    const {theme: {background}} = props;
    return {
        bg: background[props.bg] || background.main,  
    }
})
`
    display: flex;
    flex-direction: row;
    margin-bottom: 0%;
   
    min-height: 60px;
    width:100vw;
    background-color: ${props => props.bg};
`

