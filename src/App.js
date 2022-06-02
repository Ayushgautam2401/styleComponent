
import { createGlobalStyle} from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { OuterLayout } from './Container/layout/OuterLayout';
import { Routes, Route } from 'react-router-dom';



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
      <Route path= "/" element={<OuterLayout/>}/>
  
  </Routes>
    </ThemeProvider>
  );
}

export default App;
