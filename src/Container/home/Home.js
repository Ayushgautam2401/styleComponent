import Invoice from "Container/invoice/Invoice";
import React from "react";
import { useLocation } from "react-router-dom";
//import { Styledbutton } from "../../Components/Inputs/button";
import Button from 'react-bootstrap/Button'
import {
  Layout,
  DisplayArea,
  ContentArea,
  TitleBar,
  TitleLabel,
  Content,
  Footer,
  ButtonContainer,
} from "./HomeStyling";
import { useHistory } from "react-router-dom";
import { Header } from "./HomeStyling";
import Account from "Container/accounts/Accounts";
import { Switch, Route } from "react-router-dom";
import AccountForm from "Container/accounts/AccountFormPage";
import InvoiceForm from "Container/invoice/invoiceFormPage";
import { Redirect } from "react-router-dom";
import SideComponent from "./sideComponent";
import { Pdf_Maker } from "Container/invoice/invoicePDF/pdfMaker";
import { loginActions } from "Store/action/auth";

//import { useEffect } from "react";
//import { getAuthState } from "Store/Selector";
import { useDispatch, useSelector } from "react-redux";
import { currentUserActions } from "Store/action/auth";
import { ThanksButton } from "Container/thankyou/thankYouStyling";

import { Styledbutton } from "Components/Inputs/button";
//import { useHistory } from "react-router-dom";
//import { Button } from "react-bootstrap";

function Home() {
  const history = useHistory()
  const location = useLocation();
  const dispatch = useDispatch();


  const handleLogout =() => {
    dispatch(loginActions.logout ());
  }

  return (

    <Layout>
      <Header><ThanksButton variant='outline-dark' onClick={()=>history.push("/thankyou")}>Thanks</ThanksButton>
      <ThanksButton onClick={handleLogout}>Log out</ThanksButton>
      </Header>

      <DisplayArea>
        <SideComponent />
        <ContentArea>
          <TitleBar>
            <TitleLabel>
              {location.pathname === "/Account" ? (
                <p>Account List</p>
              ) : location.pathname === "/Account/Accountform/" ? (
                <p>Account Form</p>
              ) : location.pathname === "/invoice" ? (
                <p>Invoice List</p>
              ) : location.pathname === "/invoice/Invoiceform/" ? (
                <p>Invoice Form</p>
              ) : null}{" "}
            </TitleLabel>
          </TitleBar>
          <Content>
            <Switch>
              <Route exact path="/Account" component={Account} />

              <Route path="/Account/Accountform/:id?" component={AccountForm} />
              <Route exact path="/invoice" component={Invoice} />
              <Route path="/invoice/Invoiceform/:id?" component={InvoiceForm} />
                <Route path= "/invoice_Pd/:invoiceID" component={Pdf_Maker}/>

              <Redirect to="/Account"/>
            </Switch>
          </Content>
        </ContentArea>
      </DisplayArea>
      <Footer></Footer>
    </Layout>
  );
}

export default Home;
