import React from 'react'

import { Container, Bar, Circle } from './styles'

const Header: React.FC = ({ className }) => {
  const numberOfSteps = 3
  const steps = []

  const generateSteps = (numberOfSteps: number) => {
    let stepIn = 1

    while (stepIn <= numberOfSteps) {
      steps.push(stepIn < 10 ? '0' + stepIn.toString() : stepIn.toString())

      stepIn += 1
    }
  }

  generateSteps(numberOfSteps)

  return (
    <Container className={className}>
      {steps.map(step => (
        <div key={step}>
          <Bar />
          <Circle>
            <span>{step}</span>
          </Circle>
        </div>
      ))}
    </Container>
  )
}

export default Header
