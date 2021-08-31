import React from 'react'
import Head from 'next/head'

import {
  Container,
  StyledHeader,
  StyledForm,
  StyledNavBar,
  StyledFooter
} from '../styles/pages/SignIn'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Produto tal</title>
      </Head>

      <StyledHeader />
      <StyledForm />
      <StyledFooter />
      <StyledNavBar />
    </Container>
  )
}

export default SignIn
