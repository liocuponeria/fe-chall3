import React from 'react'

import { Container } from './styles'

interface InputProps {
  name: string
  placeholder?: string
  error?: boolean
}

const Input: React.FC<InputProps> = ({ name, placeholder = 'test', error }) => {
  return (
    <Container error={error}>
      <input type="text" name={name} placeholder={placeholder} />
    </Container>
  )
}

export default Input
