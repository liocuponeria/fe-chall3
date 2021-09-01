import React, { useRef, useState } from 'react'

import { IoChevronDownSharp as Chevron } from 'react-icons/io5'

import { Container, Options } from './styles'

interface SelectorProps {
  filterProducts: (query: string) => void
}

const Selector: React.FC<SelectorProps> = ({ filterProducts }) => {
  const options: string[] = ['Menor preço', 'A - Z', 'Mais recentes']

  const inputRef = useRef<HTMLInputElement>(null)

  const [open, setOpen] = useState<boolean>(false)

  const handleSelectorClick = () => {
    if (open) return setOpen(false)

    setOpen(true)
  }

  const handleSelect = (
    event: Event & {
      target: HTMLElement
    }
  ) => {
    let { target: selectedOption } = event

    if (selectedOption.tagName === 'DIV') {
      selectedOption = selectedOption.children[0] as HTMLElement
    }

    inputRef.current.value = selectedOption.innerText

    filterProducts(inputRef.current.value)
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
          <div onClick={e => handleSelect(e)} key={option}>
            <span>{option}</span>
          </div>
        ))}
      </Options>
    </Container>
  )
}

export default Selector
