import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Content, Layout, SidebarOption, TitleBar, TitleLabel } from './LayoutStyling'
import { Header } from './LayoutStyling'
import { DisplayArea } from './LayoutStyling'
import { Sidebar } from './LayoutStyling'
import { ContentArea } from './LayoutStyling'
import { Footer } from './LayoutStyling'
import { RenderSelectInput } from '../../Components/selectComponent/selectComponent'
import Text from '../../Components/Inputs/text'
//import Link from '../../Components/Inputs/link'
import Input from '../../Components/Inputs/input'
import StyledLink from '../../Components/Inputs/link'

export const OuterLayout = () => {
  return (
<Layout>
    <Header/>
    <DisplayArea>
     <Sidebar>
      <SidebarOption> <StyledLink  to='select'>Select Component</StyledLink></SidebarOption>
      <SidebarOption> <StyledLink  to='text'>Text Components</StyledLink></SidebarOption>
      <SidebarOption> <StyledLink  to='input'>Input Components</StyledLink></SidebarOption>
      <SidebarOption> <StyledLink  to='link'>Link Components</StyledLink></SidebarOption>
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
