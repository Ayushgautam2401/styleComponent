import React from 'react'
import { FormContainer, HomepageLayout } from './LoginpageStyling'
import { FormHeader } from './LoginpageStyling'
import LoginForm from './LoginForm'
import { InnerContainer } from './LoginpageStyling';
import { Heading } from './LoginpageStyling';

function LoginPage() {
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

export default LoginPage