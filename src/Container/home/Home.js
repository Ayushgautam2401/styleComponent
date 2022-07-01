import Invoice from "Container/invoice/Invoice";
import React from "react";
import { useLocation } from "react-router-dom";
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
import { loginActions } from "Store/Action/auth";


//import { useDispatch, useSelector } from "react-redux";
import { currentUserActions } from "Store/Action/auth";
import { useDispatch, useSelector } from "react-redux";
import { ThanksButton } from "Container/thankyou/thankYouStyling";
import Inventory from "Container/Inventory/Inventory";

//import { Styledbutton } from "Components/Inputs/button";
import InventoryForm from "Container/Inventory/CategoryFormPage";
//import NextPage from "Container/Inventory/NextPage";
import { getInventoryState } from "Store/Selector";
import { useParams } from "react-router-dom";
import NextPage from "Container/Inventory/NextPage";
import DetailForm from "Container/Inventory/DetailForm";


function Home() {
  const history = useHistory()
  const location = useLocation();
  const dispatch = useDispatch();
  const {category} = useParams();
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
              ) : location.pathname === "/inventory" ? (
                <p>Inventory </p>
              ) : location.pathname === "/inventory/Inventoryform" ? (
                <p>Inventory Form</p>
              ) : location.pathname === "/inventory/Inventoryform/NextPage/:category?" ? (
                <p>{category}</p>
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

              <Route exact path="/inventory" component={Inventory}/>
              <Route   path="/inventory/Inventoryform/:id?" component={InventoryForm} />
              <Route  path="/inventory/Detailform" component={DetailForm} />

              
                {/* <Redirect to="/Account" /> */}


            </Switch>
          </Content>
        </ContentArea>
      </DisplayArea>
      <Footer></Footer>
    </Layout>
  );
}

export default Home;
