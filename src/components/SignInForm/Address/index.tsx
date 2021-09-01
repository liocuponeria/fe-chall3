import React, { useRef, useState } from 'react'

import CEPAPI from '../../../services/CEP'

import Input from '../../Input'

const Contact: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null)

  const [CEPHasError, setCEPHasError] = useState<boolean>(false)

  const handleCEPChange = async (CEP: string) => {
    try {
      const { localidade, logradouro } = await CEPAPI.get(
        `/ws/${CEP}/json/`
      ).then(response => response.data)

      formRef.current.children[1].children[0].value = logradouro
      formRef.current.children[2].children[0].value = localidade
      formRef.current.children[3].children[0].value = 'Brasil'
    } catch (error) {
      console.error(error)

      setCEPHasError(true)
    }
  }

  return (
    <div ref={formRef}>
      <Input
        name="CEP"
        placeholder="CEP"
        onChange={handleCEPChange}
        error={CEPHasError}
      />
      <Input name="street" placeholder="Rua" />
      <Input name="city" placeholder="Cidade" />
      <Input name="country" placeholder="País" />
    </div>
  )
}

export default Contact
