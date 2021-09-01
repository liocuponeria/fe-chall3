import React from 'react'

import Button from '../Button'

import { Container } from './styles'

import ProductType from '../../types/Product'

interface ProductProps {
  product: ProductType
}

const Product: React.FC<
  ProductProps & React.HTMLAttributes<HTMLDivElement>
> = ({ className, product }) => {
  const { image, title, price, description } = product

  return (
    <Container className={className}>
      <div>
        <img src={image} />
      </div>
      <div>
        <div>
          <h3>{title}</h3>
          <span>R${price}</span>
          <p>{description}</p>
        </div>
        <Button text="Adicionar ao carrinho" href="/signin" />
      </div>
    </Container>
  )
}

export default Product
