import React from 'react'

import Input from '../../Input'

import { Container } from './styles'

const Contact: React.FC = () => {
  return (
    <Container>
      <Input name="CEP" placeholder="CEP" />
      <Input name="street" placeholder="Rua" />
      <Input name="city" placeholder="Cidade" />
      <Input name="country" placeholder="País" />
    </Container>
  )
}

export default Contact
