import { styled } from '../../styles'

export const Container = styled('div', {
  position: 'relative',
  cursor: 'pointer',
  width: '100%',
})

export const SelectContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '25px 15px',
  height: '22px',
  width: '100%',
  fontSize: '1rem',
  color: '$grayfont',
  outline: 'none',
  position: 'relative',
})

export const MultiSelectWrapper = styled('div', {
  width: '100%',
  overflowX: 'auto',
  border: '1px solid $border',
  borderRadius: '2.823px',
})

export const SelectedOption = styled('div', {
  display: 'flex',
  width: '120px',
  backgroundColor: '$blue',
  color: 'white',
  fontSize: '15px',
  justifyContent: 'space-between',
  padding: '5px 12px',
  borderRadius: '3px',
})

export const Placeholder = styled('div', {
  color: '$grayfont',
})

export const Dropdown = styled('div', {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  border: '1px solid $border',
  borderRadius: '4px',
  backgroundColor: '$background',
  zIndex: 1000,
  overflowY: 'scroll',
})

export const Option = styled('div', {
  fontSize: '15px',
  padding: '12px 15px',
  color: '$grayfont',
  display: 'flex',
  cursor: 'pointer',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '$blue',
    color: 'white',
  },
})

export const RemoveIcon = styled('div', {
  display: 'flex',
  marginLeft: '10px',
  cursor: 'pointer',
})

export const MultiSelectContainer = styled('div', {
  position: 'relative',
  cursor: 'pointer',
})

export const Div = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '5px',
})

export const MultiSelectStyled = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '25px 15px',
  height: '22px',
  width: '100%',
  fontSize: '1rem',
  color: '$grayfont',
  outline: 'none',
  position: 'relative',
})

export const MultiSelectDropdown = styled('div', {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  border: '1px solid $border',
  borderRadius: '4px',
  backgroundColor: '$background',
  zIndex: 1000,
  overflowY: 'scroll',
  overflowX: 'hidden',
})
