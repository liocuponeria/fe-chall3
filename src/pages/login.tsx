import React from 'react'
import Head from 'next/head'

import {
  Container,
  StyledHeader,
  StyledForm,
  StyledNavBar,
  StyledFooter
} from '../styles/pages/LogIn'

const LogIn: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <StyledHeader />
      <StyledForm />
      <StyledFooter />
      <StyledNavBar />
    </Container>
  )
}

export default LogIn
