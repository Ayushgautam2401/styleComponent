
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
<<<<<<< HEAD
import Home from "./Container/home/Home";
import {Switch, Route} from "react-router-dom";
import History from "Container/History/History";
 
=======
import LoginPage from "./Container/login/LoginPage";
import { Route, Switch } from "react-router-dom";
import Home from "Container/home/Home";
import ClientForm from "Container/client/clientForm";
import InvoiceForm from "Container/invoice/invoiceForm";
import Invoice from "Container/invoice/Invoice";
import Client from "Container/client/Client";

>>>>>>> d99621687d7bd01c06684fba0b4b527a715b6858


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
<<<<<<< HEAD
      <GlobalStyle />
      <Switch>
          <Route exact path="/">
            <History />
          </Route>
          <Route path="/Home"> <Home/></Route>
          </Switch>
=======
     <GlobalStyle />
      <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Login">
              <LoginPage/>
            </Route>
           
            {/* <Route path="/Client">
              <Client/>
            </Route>
            <Route path="/Invoice">
              < Invoice/>
            </Route> */}



      </Switch>
     

>>>>>>> d99621687d7bd01c06684fba0b4b527a715b6858
    </ThemeProvider>
  );
}

export default App;
