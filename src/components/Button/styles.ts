import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'bgColor'>

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, bgColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    padding: ${theme.spacings.xsmall};
    text-decoration: none;
    background-color: ${theme.colors[bgColor!]};
    height: 100%;
    width: 100%;
  `}
`
