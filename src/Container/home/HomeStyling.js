import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Main Layout of Page
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
// Header Component
export const Header = styled.header.attrs((props) => {
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
  flex-direction: row;
  height: 60px;
  background-color: ${(props) => props.bg};
`;

// Middle Display Area
export const DisplayArea = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 120px);
`;

// Sidebar in Display Area
export const Sidebar = styled.div.attrs((props) => {
  const {
    theme: {
      background: { secondary, ...restBg },
    },
  } = props;
  return {
    bg: restBg[props.bg] || secondary,
  };
})`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100%;
  background-color: ${(props) => props.bg};
  overflow: auto;
`;
// Options Displayed in Sidebar
export const SidebarOption = styled.div.attrs((props) => {
  const {
    theme: {
      background: { primary, ...restBg },
    },
  } = props;
  return {
    bg: restBg[props.bg] || primary,
  };
})`
  display: flex;
  width: 96%;
  height: 3rem;
  border: 2px solid black;
  background-color: ${(props) => props.bg};
  margin-top: 5%;
  margin-bottom: 5%;
  align-items: center;
  border-radius: 0.4rem;
  font-weight: bold;
  justify-content: center;
 
    
  
:only-child{
    font-weight: bold;
    color:black;
    text-decoration:none;
    
  };
  
  
`
// Main Content Area in Display Area
export const ContentArea = styled.div
`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;
  overflow: auto;
  
`;
// Title Bar in Main Content Area
export const TitleBar = styled.div`
display :flex ;
flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: beige;
  border-radius: 0.8rem;
  justify-content: center;
 
`;

// Styling of Label Area in Title Bar
export const TitleLabel = styled.div.attrs((props) => {
  const {
    theme: {
      Text: { secondary, ...resttc },
      size: { ex2lg, ...restts },
    },
  } = props;
  return {
    tc: resttc[props.tc] || secondary,
    ts: restts[props.ts] || ex2lg,
  };
})`
  color: ${(props) => props.tc};
  font-size: ${(props) => props.ts};
  padding-top: 0.5rem;
  font-weight: bold;
  justify-self: center;
  
`;

// Inner Content Area in Main Content Area
export const Content = styled.div`
 
  height: calc(100% - 50px);
  position:relative;
  overflow: auto;
`;

// Footer Componennt
export const Footer = styled.footer.attrs((props) => {
  const {
    theme: { background },
  } = props;
  return {
    bg: background[props.bg] || background.primary,
  };
})`
  height: 60px;
  background-color: ${(props) => props.bg};
`

 export const StyledNavLink = styled(NavLink).attrs((props) => {
  const {
    theme: {
      background: { primary, ...restBg },
    },
  } = props;
  return {
    bg: restBg[props.bg] || primary,
  };
})`
 text-decoration: none;
   color: black;
  font-weight: bold;
  display: flex;
  width: 98%;
  height: 3rem; 
  background-color: ${(props) => props.bg};
  border: 2px solid black;
  margin-top: 5%;
  margin-bottom: 5%;
  align-items: center;
  border-radius: 0.4rem;
  font-weight: bold;
  font-size: 1rem;
  justify-content: center;
  :hover{
    text-decoration: none;
    color:black;
  }
  
 `