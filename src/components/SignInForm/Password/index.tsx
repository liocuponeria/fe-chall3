import React from 'react'

import Input from '../../Input'

import { Container } from './styles'

const Contact: React.FC = () => {
  return (
    <Container>
      <Input name="email" placeholder="e-mail" />
      <Input name="password" placeholder="Criar senha" />
    </Container>
  )
}

export default Contact
