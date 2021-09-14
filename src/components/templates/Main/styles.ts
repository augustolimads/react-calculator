import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.secondary60};
    font-size: ${theme.fontSizes.h1};
    font-weight: ${theme.fontWeights.bold};
  `}
`
