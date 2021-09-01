import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import API from '../services/API'

import {
  Container,
  StyledHeader,
  StyledDisplay,
  StyledNavBar,
  StyledFooter
} from '../styles/pages/Home'

import ProductType from '../types/Product'

interface HomeProps {
  products: ProductType[]
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const [currentProducts, setCurrentProducts] = useState<ProductType[]>(
    products
  )

  const filterProducts = async (query: string) => {
    let sortedProducts = null

    switch (query) {
      case 'Menor preço':
        sortedProducts = products.sort((a, b) => a.price - b.price)
        break
      case 'A - Z':
        sortedProducts = products.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'Mais recentes':
        sortedProducts = products
        break
    }

    await setCurrentProducts(sortedProducts)
  }

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <StyledHeader />
      <StyledDisplay
        products={currentProducts}
        filterProducts={filterProducts}
      />
      <StyledFooter />
      <StyledNavBar />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let products = []

  try {
    await API.get('/products?limit=20').then(
      response => (products = response.data)
    )
  } catch (error) {
    console.error(error.message)
  }

  return { props: { products }, revalidate: 60 * 60 }
}

export default Home
