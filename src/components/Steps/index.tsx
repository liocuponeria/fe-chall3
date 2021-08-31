import React from 'react'

import { Container, Bar, Circle } from './styles'

const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const steps = []

  const numberOfSteps = 3
  const currentStep = 1

  const generateSteps = (numberOfSteps: number) => {
    let generatingStep = 1

    while (generatingStep <= numberOfSteps) {
      steps.push(
        generatingStep < 10
          ? '0' + generatingStep.toString()
          : generatingStep.toString()
      )

      generatingStep += 1
    }
  }

  generateSteps(numberOfSteps)

  return (
    <Container className={className}>
      {steps.map((step, index) =>
        index <= currentStep ? (
          <div className="active" key={step}>
            <Bar />
            <Circle>
              <span>{step}</span>
            </Circle>
          </div>
        ) : (
          <div key={step}>
            <Bar />
            <Circle>
              <span>{step}</span>
            </Circle>
          </div>
        )
      )}
    </Container>
  )
}

export default Header
