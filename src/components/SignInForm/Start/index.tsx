import React from 'react'

import Input from '../../Input'

import { Container } from './styles'

const Contact: React.FC = () => {
  return (
    <Container>
      <Input name="name" placeholder="Nome" />
      <Input name="family_name" placeholder="Sobrenome" />
      <Input name="phone" placeholder="Telefone" />
    </Container>
  )
}

export default Contact
