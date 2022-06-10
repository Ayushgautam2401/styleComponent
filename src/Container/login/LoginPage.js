import React from 'react'
import { FormContainer, HomepageLayout } from './LoginpageStyling'
import { FormHeader } from './LoginpageStyling'
import LoginFormComponent from './LoginFormComponent';
import { InnerContainer } from './LoginpageStyling';
import { Heading } from './LoginpageStyling';

function LoginPage() {
  return (
<HomepageLayout>
    <InnerContainer>
      <FormHeader><Heading>BIZTECNO</Heading></FormHeader>
      <FormContainer>
        <LoginFormComponent/>
      </FormContainer>
    </InnerContainer>
</HomepageLayout>
  )
}

export default LoginPage