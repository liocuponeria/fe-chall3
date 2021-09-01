import React, { useContext } from 'react'

import { CartContext } from '../../contexts/Cart'

import Input from '../Input'
import Button from '../Button'
import DecoratedLink from '../DecoratedLink'

import { Container } from './styles'

const SignInForm: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const { cart } = useContext(CartContext)

  return (
    <Container className={className}>
      <span>Entrar</span>
      <div>
        <Input name="email" placeholder="e-mail" />
        <Input name="password" placeholder="Senha" />
      </div>
      {cart ? (
        <Button text="Entrar" href="cart" />
      ) : (
        <Button text="Entrar" href="/" />
      )}
      <p>
        Não tem uma conta?
        <DecoratedLink text="cadastrar" href="/signin" />
      </p>
    </Container>
  )
}

export default SignInForm
