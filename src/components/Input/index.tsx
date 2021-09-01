import React from 'react'

import { Container } from './styles'

interface InputProps {
  name: string
  placeholder?: string
  error?: boolean
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder = 'test',
  onChange,
  error
}) => {
  return (
    <Container error={error}>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </Container>
  )
}

export default Input
