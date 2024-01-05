import React, { useState } from 'react'
import { ContainerSelect, StyledSelect, ContOption, Dropdown } from './styles'
import { CaretDown } from '@phosphor-icons/react'
import { CSS } from '@stitches/react'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  onValueChange: (value: string) => void
  id: string
  options: Option[]
  defaultValue?: string | null
  css?: CSS
}

export const Select: React.FC<SelectProps> = ({
  options,
  onValueChange,
  defaultValue,
  css,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultValue || '')

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (value: string) => {
    setSelectedOption(value)
    onValueChange(value)
    setIsOpen(false)
  }

  return (
    <ContainerSelect>
      <StyledSelect onClick={handleToggle} css={css}>
        <div>
          {options.find((option) => option.value === selectedOption)?.label ||
            ''}
        </div>
        <div>
          <CaretDown
            size={18}
            color="#BBBBBB"
            style={{
              transform: isOpen ? 'rotate(180deg)' : '',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
      </StyledSelect>
      {isOpen && (
        <Dropdown>
          {options.map((option, index) => (
            <ContOption key={index} onClick={() => handleChange(option.value)}>
              {option.label}
            </ContOption>
          ))}
        </Dropdown>
      )}
    </ContainerSelect>
  )
}
