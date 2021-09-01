import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import API from '../../services/API'

import {
  Container,
  StyledHeader,
  StyledDisplay,
  StyledNavBar,
  StyledFooter
} from '../../styles/pages/Home'

import ProductType from '../../types/Product'

interface HomeProps {
  products: ProductType[]
  category: string
}

const Home: React.FC<HomeProps> = ({ products, category }) => {
  return (
    <Container>
      <Head>
        <title>{category}</title>
      </Head>

      <StyledHeader />
      <StyledDisplay products={products} />
      <StyledFooter />
      <StyledNavBar />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { category } = params

  let products = []

  try {
    switch (category) {
      case 'clothes':
        await API.get("/products/category/men's clothing").then(
          response => (products = response.data)
        )
        await API.get("/products/category/women's clothing").then(
          response => (products = [...products, ...response.data])
        )
        break

      case 'acessories':
        await API.get('/products/category/jewelery').then(
          response => (products = response.data)
        )
        break

      default:
        await API.get(`/products/category/${category}`).then(
          response => (products = response.data)
        )
    }
  } catch (error) {
    console.error(error.message)
  }

  return {
    props: { products, category }
  }
}

export default Home
