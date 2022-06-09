
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import LoginPage from "./Container/login/LoginPage";
import { Route, Switch } from "react-router-dom";
import Home from "Container/home/Home";
import ClientForm from "Container/client/clientForm";
import InvoiceForm from "Container/invoice/invoiceForm";
import Invoice from "Container/invoice/Invoice";
import Client from "Container/client/Client";
import LoginForm from "Container/login/LoginForm";



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
      {/* <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Login">
              <LoginPage/>
            </Route>
            </Switch> */}
            {/* <Route path="/Client">
              
            </Route>
            <Route path="/Invoice">
              < Invoice/>
            </Route> */}
            <Client/>
            {/* <ClientForm/> */}
            {/* <LoginForm/> */}
            <InvoiceForm/>

    </ThemeProvider>
  );
}

export default App;
