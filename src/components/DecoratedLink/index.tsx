import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface DecoratedLinkProps {
  text: string
  href: string
}

const DecoratedLink: React.FC<DecoratedLinkProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <Container>{text}</Container>
    </Link>
  )
}

export default DecoratedLink
