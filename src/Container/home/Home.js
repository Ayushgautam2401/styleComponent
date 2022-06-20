import Invoice from "Container/invoice/Invoice";
import React from "react";
import { useLocation } from "react-router-dom";
import { Layout, DisplayArea, ContentArea, TitleBar, TitleLabel, Content, Footer, } from "./HomeStyling";
import { Header } from "./HomeStyling";
import Client from "Container/Account/Account";
import { Switch, Route } from "react-router-dom";
import ClientForm from "Container/Account/AccountFormPage";
import InvoiceForm from "Container/invoice/invoiceFormPage";
import { Redirect } from "react-router-dom";
import SideComponent from "./sideComponent";
import { Pdf_Maker } from "Container/invoice/invoicePDF/pdfMaker";
import { loginActions } from "Store/Action/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ThanksButton } from "Container/thankyou/thankYouStyling";

function Home() {
  const history = useHistory()
  const location = useLocation();
  const dispatch = useDispatch();


  const handleLogout =() => {
    dispatch(loginActions.logout ());
  }

  return (

    <Layout>
      <Header><ThanksButton variant='outline-dark' onClick={() => history.push("/thankyou")}>Thanks</ThanksButton>
        <ThanksButton variant='secondary' onClick={handleLogout}>Log out</ThanksButton>
      </Header>

      <DisplayArea>
        <SideComponent />
        <ContentArea>
          <TitleBar>
            <TitleLabel>
              {location.pathname === "/" ? (
                <p>Client List</p>
              ) : location.pathname === "/client/Clientform/" ? (
                <p>Client Form</p>
              ) : location.pathname === "/invoice" ? (
                <p>Invoice List</p>
              ) : location.pathname === "/invoice/Invoiceform/" ? (
                <p>Invoice Form</p>
              ) : null}{" "}
            </TitleLabel>
          </TitleBar>
          <Content>
            <Switch>
              <Route exact path="/client" component={Client} />

              <Route path="/client/Clientform/:id?" component={ClientForm} />
              <Route exact path="/invoice" component={Invoice} />
              <Route path="/invoice/Invoiceform/:id?" component={InvoiceForm} />

              <Route path="/invoice_Pd/:invoiceID" component={Pdf_Maker} />

              <Redirect to="/client" />

            </Switch>
          </Content>
        </ContentArea>
      </DisplayArea>
      <Footer></Footer>
    </Layout>
  );
}

export default Home;
