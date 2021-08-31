import React from 'react'

import { HiPlusCircle as Plus, HiMinusCircle as Minus } from 'react-icons/hi'

import { Container } from './styles'

const QuantitySelector: React.FC = () => {
  return (
    <Container>
      <Minus />
      <input type="number" value={1} />
      <Plus />
    </Container>
  )
}

export default QuantitySelector
