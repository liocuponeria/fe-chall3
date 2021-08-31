import React from 'react'

import { Container, Bar, Circle } from './styles'

interface StepsProps {
  numberOfSteps: number
  currentStep: number
}

const Steps: React.FC<StepsProps & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  numberOfSteps,
  currentStep
}) => {
  const steps = []

  const generateSteps = () => {
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

  generateSteps()

  return (
    <Container className={className}>
      {steps.map((step, index) =>
        index + 1 <= currentStep ? (
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

export default Steps
