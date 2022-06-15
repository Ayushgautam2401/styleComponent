
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
//import Home from "./Container/home/Home";
//import {Switch, Route} from "react-router-dom";
import History from "Container/History/History";
import LoginPage from "./Container/login/LoginPage";
import { Route, Switch } from "react-router-dom";
import Home from "Container/home/Home";
import { Pdf_Maker } from "Container/invoice/invoicePDF/pdfMaker";
import WithAuth from "HOC/withAuth";
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
        <Route  path="/Login" component={LoginPage}/>
        <Route path="/" component={WithAuth(Home)}/>
        <Route path="/Thankyou" component={ThankyouPage}/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
