import React from 'react'
import Link from 'next/link'

import Button from '../../Button'

import { Container } from './styles'

interface ProductProps {
  id: number
  image: string
  title: string
  price: number
}

const Product: React.FC<ProductProps> = ({ id, image, title, price }) => {
  return (
    <Container>
      <Link href={`/product/${id}`}>
        <a>
          <img src={image} />
          <div>
            <div>
              <h3>{title}</h3>
              <span>R${price}</span>
            </div>
            <Button text="Ver produto" />
          </div>
        </a>
      </Link>
    </Container>
  )
}

export default Product
