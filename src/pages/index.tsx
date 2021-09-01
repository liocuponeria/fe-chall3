import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import api from '../services/api'

import {
  Container,
  StyledHeader,
  StyledDisplay,
  StyledNavBar,
  StyledFooter
} from '../styles/pages/Home'

import ProductType from '../types/Product'

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>(null)

  useEffect(() => {
    api.get('/products?limit=18').then(response => setProducts(response.data))
  }, [])

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <StyledHeader />
      <StyledDisplay products={products} />
      <StyledFooter />
      <StyledNavBar />
    </Container>
  )
}

export default Home
