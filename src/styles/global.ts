import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: '0px',
    padding: '0rem',
    boxSizing: 'border-box',
    fontFamily: 'Inter',
    '&::-webkit-scrollbar': {
      width: '3px',
      height: '5px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#F0EFEF',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#BEBEBE',
      borderRadius: '10px',
    },
  },
  'body, input, textarea, button, select': {
    '&::-webkit-scrollbar': {
      width: '2px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#ffffff',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#BEBEBE',
      borderRadius: '10px',
    },
  },
  body: {
    backgroundColor: '$background',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
  },
  '.fade-enter, .fade-exit-active': {
    opacity: 0,
    transform: 'translateY(-20px)',
  },
  '.fade-enter-active, .fade-exit': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '.fade-enter-active, .fade-exit-active': {
    transition: ' transform 1250ms',
  },
})
