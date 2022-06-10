import Invoice from "Container/invoice/Invoice";
import React, { Fragment } from "react";
import {
  Layout,
  DisplayArea,
  Sidebar,
  SidebarOption,
  ContentArea,
  TitleBar,
  TitleLabel,
  Content,
  Footer,
} from "./HomeStyling";
import { Header } from "./HomeStyling";
import Client from "Container/client/Client";
// import { NavLink } from "react-router-dom";
import { NavLink } from "Components/Inputs/link";
import { Switch, Route } from "react-router-dom";
import ClientForm from "Container/client/clientFormPage";
import InvoiceForm from "Container/invoice/invoiceFormPage";
import { Redirect } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <Header />
      <DisplayArea>
        <Sidebar>
          <NavLink
         exact activeClassName="active"
            to="/"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "red",
              
            }}
          >
            <SidebarOption>Client</SidebarOption>
          </NavLink>
          <NavLink
            to="/invoice"
            // activeClassName="active"
            // activeStyle={{
            //   fontWeight: "bold",
            //   backgroundColor: "gray",
            // }}
          >
            <SidebarOption>Invoice</SidebarOption>
          </NavLink>
        </Sidebar>
        <ContentArea>
          <TitleBar>
            <TitleLabel> Title : </TitleLabel>
          </TitleBar>
          <Content>
            <Switch>
              <Route exact path="/client" component={Client} />
              <Route path = "/client/Clientform/:id?" component={ClientForm}/> 
               {/* <Redirect to="/client"/> */}

              <Route exact path="/invoice" component={Invoice}/>
              <Route  path = "/invoice/Invoiceform/:id?" component={InvoiceForm}/>
              {/* <Redirect to="/invoice"/> */}
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
