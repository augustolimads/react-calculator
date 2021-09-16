import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import Heading from 'components/Heading'
import * as S from './styles'

export type Colors = 'primary' | 'secondary' | 'lightGray' | 'gray'

type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = {
  bgColor?: Colors
  children: string
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  bgColor = 'gray',
  children = 'button',
  ...props
}: ButtonProps) => (
  <S.Wrapper bgColor={bgColor} {...props}>
    <Heading h3 size='xlarge'>
      {children}
    </Heading>
  </S.Wrapper>
)

export default Button
