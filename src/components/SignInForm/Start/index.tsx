import React from 'react'

import Input from '../../Input'

const Contact: React.FC = () => {
  return (
    <div>
      <Input name="name" placeholder="Nome" />
      <Input name="family_name" placeholder="Sobrenome" />
      <Input name="phone" placeholder="Telefone" />
    </div>
  )
}

export default Contact
