import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Content,
  Layout,
  SidebarOption,
  StyledOptionLabel,
  TitleBar,
  TitleLabel,
} from "./LayoutStyling";
import { Header } from "./LayoutStyling";
import { DisplayArea } from "./LayoutStyling";
import { Sidebar } from "./LayoutStyling";
import { ContentArea } from "./LayoutStyling";
import { Footer } from "./LayoutStyling";
//import { StyledOptions } from "./LayoutStyling";
//import { Link } from "./LayoutStyling";

export const OuterLayout = () => {
  return (
    <Layout>
      <Header />
      <DisplayArea>
        <Sidebar>
         <SidebarOption>Client</SidebarOption>
         <SidebarOption>Invoice</SidebarOption> 
        
        </Sidebar>
        <ContentArea>
          <TitleBar>
            <TitleLabel> Title : </TitleLabel>
          </TitleBar>
          <Content>
           
          </Content>
        </ContentArea>
      </DisplayArea>
      <Footer> Footer </Footer>
    </Layout>
  );
};
