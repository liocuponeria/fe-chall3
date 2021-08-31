import React from 'react'

import { FaTrash as Trash } from 'react-icons/fa'

import QuantitySelector from './QuantitySelector'

import { Container } from './styles'

const Product: React.FC = () => {
  return (
    <Container>
      <div>
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        <div>
          <h3>Boné Bordado Harry Potter Grifinoria</h3>
        </div>
      </div>
      <div>
        <QuantitySelector />
        <div>
          <Trash />
          <span>R$ 30,00</span>
        </div>
      </div>
    </Container>
  )
}

export default Product
