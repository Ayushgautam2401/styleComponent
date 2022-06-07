import React from 'react'
import { FormContainer, HomepageLayout } from './HomeStyling'
import { FormHeader } from './HomeStyling'
import LoginForm from './LoginForm'
function Home() {
  return (
<HomepageLayout>
    <FormContainer>
      <FormHeader/>
      <LoginForm/>
    </FormContainer>
</HomepageLayout>
  )
}

export default Home