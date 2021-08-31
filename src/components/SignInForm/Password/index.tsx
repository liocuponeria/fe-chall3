import React from 'react'

import Input from '../../Input'

const Contact: React.FC = () => {
  return (
    <div>
      <Input name="email" placeholder="e-mail" />
      <Input name="password" placeholder="Criar senha" />
    </div>
  )
}

export default Contact
