import logo from './logo.svg';
import './App.css';
import { createGlobalStyle} from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Text from './Components/Inputs/text';
import Input from './Components/Inputs/input';
import Link from './Components/Inputs/link';
 const GlobalStyle = createGlobalStyle`
 html,body{
   font-size:16px;
   margin:0;
   padding:0;
   font-family: 'Courier New', Courier, monospace;

 }`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <div className="App">
      <Text/>
      <Input/>
      <Link/>
    </div>
    </ThemeProvider>
  );
}

export default App;
