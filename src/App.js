import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import LoginPage from "./Container/login/LoginPage";
import { Route, Switch } from "react-router-dom";
import Home from "Container/home/Home";
<<<<<<< HEAD




=======
import { Pdf_Maker } from "Container/invoice/invoicePDF/pdfMaker";
>>>>>>> master
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
        <Route path="/" component={Home}/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
