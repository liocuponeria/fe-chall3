import React from 'react'

import Product from './Product'
import Button from '../Button'

import { Container } from './styles'

const Cart: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return (
    <Container className={className}>
      <span>Meu carrinho</span>
      <div>
        <Product />
        <div>
          <span>Total: R$30,00</span>
          <Button text="Continuar" />
        </div>
      </div>
    </Container>
  )
}

export default Cart
