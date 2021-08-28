import React from 'react'
import Head from 'next/head'

import {
  Container,
  StyledHeader,
  StyledDisplay,
  StyledNavBar,
  StyledFooter
} from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <StyledHeader />
      <StyledDisplay />
      <StyledFooter />
      <StyledNavBar />
    </Container>
  )
}

export default Home
