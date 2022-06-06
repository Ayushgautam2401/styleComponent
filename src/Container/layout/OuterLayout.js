import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Content, Layout,TitleBar, TitleLabel } from './LayoutStyling'
import { Header } from './LayoutStyling'
import { DisplayArea } from './LayoutStyling'
import { Sidebar } from './LayoutStyling'
import { ContentArea } from './LayoutStyling'
import { Footer } from './LayoutStyling'

export const OuterLayout = () => {
  return (
<Layout>
    <Header/>
    <DisplayArea>
     <Sidebar>
       <Link  to='select'>Select Component</Link>
       <Link to='temp'> Icon inputs</Link>
       <Link  to='text'>Text Components</Link>
       <Link  to='input'>Input Components</Link>
       <Link  to='link'>Link Components</Link>
     </Sidebar>
     <ContentArea>

     <TitleBar><TitleLabel> Title : </TitleLabel></TitleBar>
     <Content>
     
      <Outlet/>
      </Content>

     </ContentArea>
    </DisplayArea>
    <Footer> Footer </Footer>
    </Layout>
  )
}
