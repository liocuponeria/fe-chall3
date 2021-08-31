import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface ButtonProps {
  text: string
  href?: string
  filled: boolean
}

const Button: React.FC<ButtonProps> = ({ text, href, filled = true }) => {
  return (
    <Container filled={filled}>
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
