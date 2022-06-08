
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { OuterLayout } from "./Components/layout/OuterLayout";
import { theme } from "./theme";
import Home from "./Container/home/Home";
import {Switch, Route} from "react-router-dom";
import History from "Container/History/History";
 

// import { OuterLayout } from "./Container/layout/OuterLayout";
// import { Routes, Route } from "react-router-dom";
// import { RenderSelectInput } from "./Components/selectComponent/selectComponent";

// import Text from "./Components/Inputs/text";
// import Input from "./Components/Inputs/input";
// import Link from "./Components/Inputs/link";
const GlobalStyle = createGlobalStyle`


 html,body{
   font-size:16px;
   margin:0;
   padding:0;
   font-family: 'Courier New', Courier, monospace;
   height: 100vh;
   width: 100%;
 }`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
          <Route exact path="/">
            <History />
          </Route>
          <Route path="/Home"> <Home/></Route>
          </Switch>
    </ThemeProvider>
  );
}

export default App;
