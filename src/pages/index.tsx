import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import API from '../services/API'
import Alternative from '../services/Alternative'

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
    API.get('/products?limit=20')
      .then(response => setProducts(response.data))
      .catch(err => {
        console.error('Utilizando API secundária:' + err)
        Alternative.get('/products')
          .then(response => setProducts(response.data))
          .catch(err => console.error(err))
      })
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
