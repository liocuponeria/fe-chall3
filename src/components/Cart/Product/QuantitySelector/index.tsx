import React, { useRef } from 'react'

import { HiPlusCircle as Plus, HiMinusCircle as Minus } from 'react-icons/hi'

import { Container } from './styles'

interface QuantitySelectorProps {
  quantity: number
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <Minus
        onClick={() =>
          (inputRef.current.value = (
            parseInt(inputRef.current.value) - 1
          ).toString())
        }
      />
      <input type="number" value={quantity} ref={inputRef} />
      <Plus
        onClick={() =>
          (inputRef.current.value = (
            parseInt(inputRef.current.value) + 1
          ).toString())
        }
      />
    </Container>
  )
}

export default QuantitySelector
