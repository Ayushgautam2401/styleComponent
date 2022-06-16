import Invoice from "Container/invoice/Invoice";
import React from "react";
import { useLocation } from "react-router-dom";

import { Layout,DisplayArea,ContentArea,TitleBar,TitleLabel,Content,Footer,} from "./HomeStyling";

import { Header } from "./HomeStyling";
import Client from "Container/client/Client";
import { Switch, Route } from "react-router-dom";
import ClientForm from "Container/client/clientFormPage";
import InvoiceForm from "Container/invoice/invoiceFormPage";
import { Redirect } from "react-router-dom";
import SideComponent from "./sideComponent";
import { Pdf_Maker } from "Container/invoice/invoicePDF/pdfMaker";


import { useEffect } from "react";
import { getAuthState } from "Store/Selector";
import { useDispatch, useSelector } from "react-redux";
import { currentUserActions } from "Store/Action/auth";

import { Styledbutton } from "Components/Inputs/button";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  const history = useHistory()
  const location =useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector(getAuthState);


  useEffect(() => {
    // fetch user
    dispatch(currentUserActions.request())
  }, [])
  return (
    user ? <Layout>
      <Header><Button variant='outline-dark' onClick={()=> history.push("/thankyou")}>Thank You</Button></Header>
      <DisplayArea>
        <SideComponent />
        <ContentArea>
          <TitleBar>
            <TitleLabel>
              {location.pathname === "/client" ? (
                <p>Client List</p>
              ) : location.pathname === "/client/Clientform/" ? (
                <p>Client Form</p>
              ) : location.pathname === "/invoice" ? (
                <p>Invoice List</p>
              ) : location.pathname === "/invoice/Invoiceform/" ? (
                <p>Invoice Form</p>
              ) : null}{" "}
            </TitleLabel>
            {/* <ButtonContainer></ButtonContainer> */}
          </TitleBar>
          <Content>
            <Switch>
              <Route exact path="/client" component={Client} />

              <Route path="/client/Clientform/:id?" component={ClientForm} />
              <Route exact path="/invoice" component={Invoice} />
              <Route path="/invoice/Invoiceform/:id?" component={InvoiceForm} />

              <Route path= "/invoice_Pd/:invoiceID" component={Pdf_Maker}/>

              <Redirect to="/client"/>

            </Switch>
          </Content>
        </ContentArea>
      </DisplayArea>
      <Footer></Footer>
    </Layout>
    : <div>Lodaing ... </div>
  );
}

export default Home;
