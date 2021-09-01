import React from 'react'
import Head from 'next/head'

import {
  Container,
  StyledHeader,
  StyledProduct,
  StyledNavBar,
  StyledFooter
} from '../styles/pages/Product'

const Product: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Produto tal</title>
      </Head>

      <StyledHeader />
      <StyledProduct />
      <StyledFooter />
      <StyledNavBar />
    </Container>
  )
}

export default Product
