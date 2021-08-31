import React from 'react'

import Input from '../../Input'

const Contact: React.FC = () => {
  return (
    <div>
      <Input name="CEP" placeholder="CEP" />
      <Input name="street" placeholder="Rua" />
      <Input name="city" placeholder="Cidade" />
      <Input name="country" placeholder="País" />
    </div>
  )
}

export default Contact
