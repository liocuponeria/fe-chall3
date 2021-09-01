import React, { useContext } from 'react'

import { FaTrash as Trash } from 'react-icons/fa'

import { CartContext } from '../../../contexts/Cart'

import QuantitySelector from './QuantitySelector'

import { Container } from './styles'

interface ProductProps {
  product: {
    id: number
    quantity: number
    image: string
    title: string
    price: number
  }
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { removeFromCart } = useContext(CartContext)

  const { id, quantity, image, title, price } = product

  return (
    <Container>
      <div>
        <img src={image} />
        <div>
          <h3>{title}</h3>
        </div>
      </div>
      <div>
        <QuantitySelector quantity={quantity} />
        <div>
          <Trash onClick={() => removeFromCart(id)} />
          <span>R$ {price}</span>
        </div>
      </div>
    </Container>
  )
}

export default Product
