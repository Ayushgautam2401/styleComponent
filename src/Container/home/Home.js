import React from 'react'
import { Layout,DisplayArea,Sidebar,SidebarOption,ContentArea,TitleBar,TitleLabel,Content,Footer } from './HomeStyling'
import { Header } from './HomeStyling'


function Home() {
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
  )
}

export default Home