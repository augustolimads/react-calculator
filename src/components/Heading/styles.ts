import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

export const H1 = styled.h1<HeadingProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes[size!]};
  `}
`
export const H2 = styled.h2<HeadingProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes[size!]};
  `}
`
export const H3 = styled.h3<HeadingProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes[size!]};
  `}
`
