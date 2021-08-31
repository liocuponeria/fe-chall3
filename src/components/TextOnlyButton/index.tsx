import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface TextOnlyButtonProps {
  text: string
  href: string
}

const TextOnlyButton: React.FC<TextOnlyButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <Container>{text}</Container>
    </Link>
  )
}

export default TextOnlyButton
