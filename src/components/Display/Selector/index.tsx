import React, { useRef, useState } from 'react'

import { IoChevronDownSharp as Chevron } from 'react-icons/io5'

import { Container, Options } from './styles'

const Selector: React.FC = () => {
  const options: string[] = ['Menor preço', 'A - Z', 'Mais recentes']

  const inputRef = useRef<HTMLInputElement>(null)

  const [open, setOpen] = useState<boolean>(true)

  const handleSelectorClick = () => {
    if (open) return setOpen(false)

    setOpen(true)
  }

  const handleSelect = (selectedOption: string) => {
    inputRef.current.value = selectedOption
  }

  return (
    <Container onClick={handleSelectorClick} isOpen={open}>
      <div>
        <input
          type="text"
          placeholder="Ordenar por"
          readOnly={true}
          ref={inputRef}
        />
        <Chevron />
      </div>
      <Options areVisible={open} quantity={options.length}>
        {options.map(option => (
          <div
            onClick={e => handleSelect(e.target.children[0].innerText)}
            key={option}
          >
            <span>{option}</span>
          </div>
        ))}
      </Options>
    </Container>
  )
}

export default Selector
