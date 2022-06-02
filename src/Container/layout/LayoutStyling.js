import styled from 'styled-components';

export const Layout = styled.div `
     display: flex ;
     flex-direction: column;
    height: 100%;
    width:100%;
    viewport-fit: inherit;

`

export const Header = styled.header

`
    display: flex;
    flex-direction: row;
    border: 2px solid blue;
    width: 100vw;
    margin-top: 0vh;
    min-height: 8vh;

 `


export const DisplayArea = styled.div `
    display: flex;
    flex-direction: row;
    width:100vw;
    height: calc(100%-50px);
    overflow: auto;
    border: 2px solid black;
`
export const Sidebar = styled.div `
    display: flex;
    border: 2px solid black;
    width: 15vw;
    height: 100%;
    float: inline-start;
`

export const ContentArea = styled.div `
    display: flex;
    border: 2px solid black;
    height: 100%;
    width: 85vw;
    float: inline-end ;


`

export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    margin-bottom: 0%;
    border: 2px solid red;
    min-height: 8vh;
    width:100vw;
`

