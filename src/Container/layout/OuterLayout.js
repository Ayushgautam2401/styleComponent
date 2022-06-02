import React from 'react'
import { Header } from '../styles/styling'
import { Footer } from '../styles/styling'
import { DisplayArea } from '../styles/styling'
import { ContentArea } from '../styles/styling'
import { Sidebar } from '../styles/styling'
import { Layout } from '../styles/styling'

export const OuterLayout = () => {
  return (
<Layout>
    <Header/>
    <DisplayArea>
     <Sidebar/>
     <ContentArea/>
    </DisplayArea>
    <Footer/>
    </Layout>
  )
}
