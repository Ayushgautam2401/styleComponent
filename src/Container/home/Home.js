import Invoice from 'Container/invoice/Invoice'
import React from 'react'
import { Layout,DisplayArea,Sidebar,SidebarOption,ContentArea,TitleBar,TitleLabel,Content,Footer } from './HomeStyling'
import { Header } from './HomeStyling'
import Client from 'Container/client/Client'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { StyledNavLink } from './HomeStyling'

function Home() {
  return (
    <Layout>
    <Header />
    <DisplayArea>
      <Sidebar>
       <StyledNavLink to='/Client'><SidebarOption>Client</SidebarOption></StyledNavLink>
      <StyledNavLink to='/Invoice'> <SidebarOption>Invoice</SidebarOption></StyledNavLink> 
      
      </Sidebar>
      <ContentArea>
        <TitleBar>
          <TitleLabel> Title : </TitleLabel>
        </TitleBar>
        <Content>
          
            
          
        </Content>
      </ContentArea>
    </DisplayArea>
    <Footer></Footer>
  </Layout>
  )
}

export default Home