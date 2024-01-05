import { styled } from '../../styles'

export const Div = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Back = styled('div', {
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Form = styled('form', {
  width: '50%',
  height: '80%',
})

export const Line = styled('div', {
  marginTop: '15px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const LineData = styled('div', {
  margin: '10px 0',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
})

export const Title = styled('span', {
  color: '$grayfont',
  fontSize: '16px',
  fontWeight: '500',
})

export const Button = styled('button', {
  marginTop: '20px',
  width: '100%',
  height: '50px',
  border: 'none',
  backgroundColor: '$green',
  color: 'white',
  fontSize: '17px',
  fontWeight: '500',
  borderRadius: '2px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    backgroundColor: '#347D94',
    transform: 'scale(1.02)',
  },
})
