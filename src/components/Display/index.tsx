import React from 'react'

import Selector from './Selector'
import Product from './Product'

import { Container } from './styles'

const Display: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return (
    <Container className={className}>
      <div>
        <span>Sugestões para você</span>
        <Selector />
      </div>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Container>
  )
}

export default Display
