import React from 'react'
import Head from 'next/head'

import {
  Container,
  StyledHeader,
  StyledCart,
  StyledNavBar,
  StyledFooter
} from '../styles/pages/Cart'

const Cart: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Cart</title>
      </Head>

      <StyledHeader />
      <StyledCart />
      <StyledFooter />
      <StyledNavBar />
    </Container>
  )
}

export default Cart
