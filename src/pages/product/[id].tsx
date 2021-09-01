import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import API from '../../services/API'

import {
  Container,
  StyledHeader,
  StyledProduct,
  StyledNavBar,
  StyledFooter
} from '../../styles/pages/Product'

import ProductType from '../../types/Product'

interface ProductProps {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Container>
      <Head>
        <title>{product.title}</title>
      </Head>

      <StyledHeader />
      <StyledProduct product={product} />
      <StyledFooter />
      <StyledNavBar />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params

  let product = null

  try {
    await API.get(`/products/${id}`).then(response => (product = response.data))
  } catch (error) {
    console.error(error.message)
  }

  return {
    props: { product }
  }
}

export default Product
