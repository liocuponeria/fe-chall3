import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface ButtonProps {
  text: string
  onClick?: () => void
  href?: string
  filled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  href,
  filled = true
}) => {
  return (
    <Container onClick={onClick} filled={filled}>
      {href ? (
        <Link href={href}>
          <a>{text}</a>
        </Link>
      ) : (
        <span>{text}</span>
      )}
    </Container>
  )
}

export default Button
