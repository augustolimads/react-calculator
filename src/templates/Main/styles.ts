import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`
