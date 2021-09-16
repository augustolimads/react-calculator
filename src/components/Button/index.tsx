import React from 'react'

import Heading from 'components/Heading'
import * as S from './styles'
import { Children } from 'types/children'

export type Colors = 'primary' | 'secondary' | 'lightGray' | 'gray'

export type ButtonProps = {
  bgColor?: Colors
  children: Children
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
