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
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import clientForm from "Container/client/clientForm";

function Home() {
  return (
    <Layout>
      <Header />
      <DisplayArea>
        <Sidebar>
          <NavLink
          activeClassName="active"
            to="/"
           
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "gray",
              
            }}
          >
            <SidebarOption>Client</SidebarOption>
          </NavLink>
          <NavLink
            to="/Invoice"
            activeClassName="active"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "gray",
            }}
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
              <Route exact path="/" component={Client} />
              {/* <Switch>
             <Route path='/ClientForm' component={clientForm}></Route>
           </Switch> */}

              <Route exact path="/Invoice" component={Invoice} />
            </Switch>
          </Content>
        </ContentArea>
      </DisplayArea>
      <Footer></Footer>
    </Layout>
  );
}

export default Home;
