import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import LoginPage from "./Container/login/LoginPage";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Home from "Container/home/Home";
import WithAuth from "HOC/withAuth";
import ThankyouPage from "Container/thankyou/ThankyouPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserState } from "Store/Selector";
import { useState } from "react";
import { currentUserActions } from "Store/Action/auth";
import { Fragment } from "react";
const GlobalStyle = createGlobalStyle`
 html,body{
   font-size:16px;
   margin:0;
   padding:0;
   font-family: 'Poppins', sans-serif;
   height: 100vh;
   width: 100vw;
 }`;

// const User = (Component) => {
//   const history = useHistory();
//   const [checked,setChecked]=useState; 

//   const { isAuthenticated,fetching } = useSelector(getUserState)
//   const location = useLocation();
//   useEffect(() => {
//     console.log ('auth', isAuthenticated,location)
//     if (!isAuthenticated) {
//       history.push("/login");
//     }
//   }, [isAuthenticated])
//   return isAuthenticated ? Component : null
// }


function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isAuthenticated, fetching } = useSelector(getUserState);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(currentUserActions.request());
    }
  }, []);


  return (
    <div>
      {!fetching && <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/thankyou" component={WithAuth(ThankyouPage)} />
          <Route path="/" component={WithAuth(Home)} />
        </Switch>
      </ThemeProvider>
      }
    </div>
  );
}

export default App;
