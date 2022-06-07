
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import LoginPage from "./Container/login/LoginPage";
import { Route, Switch } from "react-router-dom";
import Home from "Container/home/Home";
import ClientForm from "Container/client/clientForm";
<<<<<<< HEAD
import InvoiceForm from "Container/invoice/invoiceForm"
=======
import InvoiceForm from "Container/invoice/invoiceForm";
import Invoice from "Container/invoice/Invoice";
import Client from "Container/client/Client";

>>>>>>> cf79fd32260cc559d0881c52eac402eebd02b109


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



<<<<<<< HEAD
      </Switch>
=======
      <GlobalStyle />
      {/* <ClientForm/> */}
      {/* <InvoiceForm/> */}
      <Invoice/>
      <Client/>
      {/* <OuterLayout/> */}
      {/* <Temp/>    */}
>>>>>>> cf79fd32260cc559d0881c52eac402eebd02b109
     

    </ThemeProvider>
  );
}

export default App;
