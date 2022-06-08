
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { OuterLayout } from "./Components/layout/OuterLayout";
import { theme } from "./theme";
// import { OuterLayout } from './Container/layout/OuterLayout';
import { Routes, Route } from 'react-router-dom';
import { RenderSelectInput } from './Components/selectComponent/selectComponent';

import Text from './Components/Inputs/text';
import Input from './Components/Inputs/input';
import Link from './Components/Inputs/link';
import Temp from './Components/Inputs/temp';
import { Nav } from './Components/Inputs/link';
import ClientForm from "Container/client/clientForm";
import InvoiceForm from "Container/invoice/invoiceForm";
import Invoice from "Container/invoice/Invoice";
import Client from "Container/client/Client";



const GlobalStyle = createGlobalStyle`
 html,body{
   font-size:16px;
   margin:0;
   padding:0;
   font-family: 'Poppins', sans-serif;
   /* font-family: 'Courier New', Courier, monospace; */
   height: 100vh;
   width: 100%;
 }`;

function App() {
  return (
    <ThemeProvider theme={theme}>



      <GlobalStyle />
      <ClientForm/>
      {/* <InvoiceForm/> */}
      {/* <Invoice/> */}
      {/* <Client/> */}
      {/* <OuterLayout/> */}
      {/* <Temp/>    */}
     
     {/* <Routes>
        <Route path="/" element={<OuterLay out />}/>
         
        
      </Routes> */}

    </ThemeProvider>
  );
}

export default App;
