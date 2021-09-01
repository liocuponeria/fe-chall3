import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { CartContext } from '../../contexts/Cart'

import Product from './Product'
import Button from '../Button'

import { Container } from './styles'

const Cart: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const router = useRouter()
  const { cart } = useContext(CartContext)

  const [total, setTotal] = useState<number>(0)

  if (!cart || cart.length === 0) router.push('/')

  useEffect(() => {
    if (!cart || cart.length === 0) router.push('/')

    const tags = cart.map(product => product.quantity * product.price)

    setTotal(
      tags.reduce((total, tag) => {
        return total + tag
      }, 0)
    )
  }, [cart])

  return (
    <Container className={className}>
      <span>Meu carrinho</span>
      <div>
        <div>
          {cart.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div>
          <span>Total: R${total}</span>

          <Button text="Continuar" />
        </div>
      </div>
    </Container>
  )
}

export default Cart
