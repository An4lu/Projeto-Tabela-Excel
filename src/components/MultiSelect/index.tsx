import { useState } from 'react'
import {
  MultiSelectContainer,
  MultiSelectStyled,
  MultiSelectDropdown,
  Option,
  Placeholder,
  SelectedOption,
  RemoveIcon,
  Div,
  MultiSelectWrapper,
} from './styles'
import { CaretDown, X } from '@phosphor-icons/react'

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
  placeholder?: string
  onChange?: (selectedOptions: Option[]) => void
}

export const MultiSelect = ({
  options,
  placeholder = 'Selecione',
  onChange,
}: MultiSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])
  const [dropdownOptions, setDropdownOptions] = useState<Option[]>(options)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSelectChange = (newValue: Option) => {
    if (!selectedOptions.some((option) => option.value === newValue.value)) {
      const updatedOptions = [...selectedOptions, newValue]
      const updatedDropdownOptions = dropdownOptions.filter(
        (option) => option.value !== newValue.value,
      )
      setSelectedOptions(updatedOptions)
      setDropdownOptions(updatedDropdownOptions)
      if (onChange) {
        onChange(updatedOptions)
      }
    }
  }

  const handleRemoveOption = (value: string) => {
    const updatedOptions = selectedOptions.filter(
      (option) => option.value !== value,
    )
    const removedOption = selectedOptions.find(
      (option) => option.value === value,
    )
    if (removedOption) {
      setDropdownOptions([...dropdownOptions, removedOption])
    }
    setSelectedOptions(updatedOptions)
    if (onChange) {
      onChange(updatedOptions)
    }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <MultiSelectContainer>
      <MultiSelectWrapper>
        <MultiSelectStyled onClick={toggleDropdown}>
          <Div>
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <SelectedOption key={option.value}>
                  {option.label}
                  <RemoveIcon onClick={() => handleRemoveOption(option.value)}>
                    <X size={18} color="white" weight="bold" />
                  </RemoveIcon>
                </SelectedOption>
              ))
            ) : (
              <Placeholder>{placeholder}</Placeholder>
            )}
          </Div>
          <div>
            <CaretDown
              size={18}
              color="#BBBBBB"
              style={{
                margin: '0 10px',
                transform: isDropdownOpen ? 'rotate(180deg)' : '',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        </MultiSelectStyled>
        {isDropdownOpen && (
          <MultiSelectDropdown>
            {dropdownOptions.map((option) => (
              <Option
                key={option.value}
                onClick={() => handleSelectChange(option)}
              >
                {option.label}
              </Option>
            ))}
          </MultiSelectDropdown>
        )}
      </MultiSelectWrapper>
    </MultiSelectContainer>
  )
}
