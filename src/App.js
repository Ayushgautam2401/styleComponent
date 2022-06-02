
import { createGlobalStyle} from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';


import { OuterLayout } from './Container/layout/OuterLayout';
import { Routes, Route } from 'react-router-dom';
import { RenderSelectInput } from './Components/selectComponent/selectComponent';

import Text from './Components/Inputs/text';
import Input from './Components/Inputs/input';
import Link from './Components/Inputs/link';
const GlobalStyle = createGlobalStyle`


 html,body{
   font-size:16px;
   margin:0;
   padding:0;
   font-family: 'Courier New', Courier, monospace;
   height: 100vh;
 }`



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>

    <Routes>
      <Route path= "/" element={<OuterLayout/>}>
      <Route path= "/select" element={<RenderSelectInput/>}/>
      <Route path= "/text" element={<Text/>}/>
      <Route path= "/input" element={<Input/>}/>
      <Route path= "/link" element={<Link/>}/>
      </Route>
  </Routes>


    </ThemeProvider>
  );
}

export default App;
