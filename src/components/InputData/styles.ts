import { styled } from '../../styles'

export const InputContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '22px 15px',
  height: '20px',
  width: '100%',
  borderRadius: '2.823px',
  border: '2px solid $border',
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

// export const Label = styled('label', {
//   display: 'flex',
//   color: '$grayfont',
//   fontSize: '16px',
//   fontWeight: '500',
// })
