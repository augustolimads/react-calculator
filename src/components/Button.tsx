import { ButtonHTMLAttributes } from 'react'
import { Children } from 'types/children'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: Children
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>
}
