
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import LoginPage from "./Container/login/LoginPage";
import { Route, Switch } from "react-router-dom";
import Home from "Container/home/Home";
import WithAuth from "HOC/withAuth";
import { useSelector } from "react-redux";
import { getAuthState } from "Store/Selector";
import ThankyouPage from "Container/thankyou/ThankyouPage";

const GlobalStyle = createGlobalStyle`
 html,body{
   font-size:16px;
   margin:0;
   padding:0;
   font-family: 'Poppins', sans-serif;
   height: 100vh;
   width: 100vw;
 }`;

function App() {
  return (
    <ThemeProvider theme={theme}>
     <GlobalStyle />
      <Switch>
        <Route  path="/login" component={LoginPage}/>
        <Route path="/thankyou" component={WithAuth(ThankyouPage)}/>

        
        <Route path="/" component={WithAuth(Home)}/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
