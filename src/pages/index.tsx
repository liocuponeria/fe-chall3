import React from 'react'
import { GetStaticProps } from 'next'
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

interface HomeProps {
  products: ProductType[]
}

const Home: React.FC<HomeProps> = ({ products }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  let products = []

  try {
    await API.get('/products?limit=20').then(
      response => (products = response.data)
    )
  } catch (error) {
    console.error('Utilizando API secundária:' + error.message)

    try {
      await Alternative.get('/products').then(
        response => (products = response.data)
      )
    } catch (error) {
      console.error(error.message)
    }
  }

  return { props: { products }, revalidate: 60 * 60 }
}

export default Home
