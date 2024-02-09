import {css} from 'styled-system/css'

export const Hello = () => {
  return <button className={css({
    bg: 'red.300',
    fontFamily: 'Inter',
    px: '4',
    py: '3',
    borderRadius: 'md',
    _hover: { bg: 'red.400' },
  })}>Hello</button>
}