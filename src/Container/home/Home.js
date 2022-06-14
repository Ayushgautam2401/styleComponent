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
} from "./HomeStyling";

import { Header } from "./HomeStyling";
import Client from "Container/client/Client";
import { Switch, Route } from "react-router-dom";
import ClientForm from "Container/client/clientFormPage";
import InvoiceForm from "Container/invoice/invoiceFormPage";
import { Redirect } from "react-router-dom";
import { Pdf_Maker } from "Container/invoice/invoicePDF/pdfMaker";
import SideComponent from "./sideComponent";


function Home() {
  const location =useLocation();
  return (
    <Layout>
      <Header />
      <DisplayArea>
       <SideComponent/>
        <ContentArea>
          <TitleBar>
            <TitleLabel>{location.pathname === '/client' ? (
              <p>Client</p>
            ) : location.pathname ==='/invoice'?(<p>invoice</p>):null} </TitleLabel>

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
  );
}

export default Home;
