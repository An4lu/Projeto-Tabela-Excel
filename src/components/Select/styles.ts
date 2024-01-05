import { styled } from '../../styles'

export const ContainerSelect = styled('div', {
  width: '100%',
  position: 'relative',
  cursor: 'pointer',
})

export const StyledSelect = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '25px 15px',
  height: '22px',
  width: '100%',
  borderRadius: '2.823px',
  border: '1px solid $border',
  fontSize: '1rem',
  color: '$grayfont',
  '&:focus': {
    outline: 'none',
  },
  '&::placeholder': {
    color: '$grayfont',
    fontWeight: '400',
  },
})

export const Dropdown = styled('div', {
  position: 'absolute',
  maxHeight: '100px',
  width: '100%',
  border: '1px solid $border',
  borderRadius: '4px',
  backgroundColor: 'white',
  zIndex: 1000,
  overflowY: 'scroll',
})

export const ContOption = styled('div', {
  fontSize: '15px',
  padding: '12px 15px',
  color: '$grayfont',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$blue',
    color: 'white',
  },
})
