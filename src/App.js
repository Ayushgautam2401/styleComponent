
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { OuterLayout } from "./Components/layout/OuterLayout";
import { theme } from "./theme";
import Home from "./Container/home/Home";
import { Route, Switch } from "react-router-dom";

import ClientForm from "Container/client/clientForm";
import InvoiceForm from "Container/invoice/invoiceForm"


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
            <Route path = "/Clients">
              <OuterLayout/>
            </Route>
            <Route path="/Client">
              <Client/>
            </Route>
            <Route path="/Invoice">
              < Invoice/>
            </Route>



      </Switch>
     

    </ThemeProvider>
  );
}

export default App;
