import React from 'react'
import { FormContainer, HomepageLayout } from './HomeStyling'
import { FormHeader } from './HomeStyling'
import LoginForm from './LoginForm'
import { InnerContainer } from './HomeStyling';
import { Heading } from './HomeStyling';
function Home() {
  return (
<HomepageLayout>
    <InnerContainer>
      <FormHeader><Heading>BIZTECNO</Heading></FormHeader>
      <FormContainer>
        <LoginForm/>
      </FormContainer>
    </InnerContainer>
</HomepageLayout>
  )
}

export default Home