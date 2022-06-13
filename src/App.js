
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



const GlobalStyle = createGlobalStyle`
 html,body{
   font-size:16px;
   margin:0;
   padding:0;
   font-family: 'Poppins', sans-serif;
   /* font-family: 'Courier New', Courier, monospace; */
   height: 100vh;
   width: 100vw;
 }`;

function App() {
  return (
    <ThemeProvider theme={theme}>
     <GlobalStyle />
      <Switch>
        <Route exact path="/Login" component={LoginPage}/>
        <Route path="/" component={Home}/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
