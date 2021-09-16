import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Backspace } from '@styled-icons/ionicons-outline/Backspace'

export const Wrapper = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  width: 28em;
  padding: 0.8em;

  ${media.lessThan('medium')`
  width: calc(100vw - 2.5em);
  `}
`

export const Head = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `}
  display: flex;
  height: 8em;
  align-items: center;
  justify-content: center;
  height: 6.4em;
  ${media.lessThan('medium')`
  `}
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(4em, 1fr));
  grid-template-rows: repeat(5, 1fr);
  gap: 0.16em;
`
export const Equal = styled.div`
  grid-column: 4;
  grid-row: 4 / span last-line;
`

export const BackspaceIcon = styled(Backspace).attrs(({ theme }) => ({
  size: theme.font.sizes.xxlarge
}))``
