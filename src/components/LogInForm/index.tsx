import React from 'react'

import Input from '../Input'
import Button from '../Button'
import DecoratedLink from '../DecoratedLink'

import { Container } from './styles'

const SignInForm: React.FC = ({ className }) => {
  return (
    <Container className={className}>
      <span>Entrar</span>
      <div>
        <Input name="email" placeholder="e-mail" />
        <Input name="password" placeholder="Senha" />
      </div>
      <Button text="Entrar" />
      <p>
        Não tem uma conta?
        <DecoratedLink text="cadastrar" href="/signin" />
      </p>
    </Container>
  )
}

export default SignInForm
