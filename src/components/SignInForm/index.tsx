import React, { useState } from 'react'

import Steps from '../Steps'
import Start from './Start'
import Password from './Password'
import Address from './Address'
import Button from '../Button'
import DecoratedLink from '../DecoratedLink'

import { Container } from './styles'

const SignInForm: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  return (
    <Container className={className} currentStep={currentStep}>
      <span>Criar conta</span>
      <Steps numberOfSteps={3} currentStep={currentStep} />
      <div>
        <Start />
        <Password />
        <Address />
      </div>
      <div>
        {currentStep < 3 ? (
          <Button
            text="Próximo"
            onClick={() => setCurrentStep(prevState => prevState + 1)}
          />
        ) : (
          <Button text="Cadastrar" href="/login" />
        )}
        {currentStep !== 1 && (
          <Button
            text="Voltar"
            onClick={() => setCurrentStep(prevState => prevState - 1)}
            filled={false}
          />
        )}
      </div>
      <p>
        Já tem uma conta?
        <DecoratedLink text="entrar" href="/login" />
      </p>
    </Container>
  )
}

export default SignInForm
