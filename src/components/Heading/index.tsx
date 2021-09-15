import * as S from './styles'

export type Colors =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'lightGray'
  | 'gray'
  | 'red'

export type Sizes = 'medium' | 'large' | 'xlarge' | 'xxlarge'

export type HeadingProps = {
  children: React.ReactNode
  size?: Sizes
  color?: Colors
  h1?: boolean
  h2?: boolean
  h3?: boolean
}

const Heading = ({
  children,
  size = 'medium',
  color = 'white',
  h1 = false,
  h2 = true,
  h3 = false
}: HeadingProps) => {
  if (h1 && !h2 && !h3) {
    return (
      <S.H1 size={size} color={color}>
        {children}
      </S.H1>
    )
  }
  if (h3 && !h1 && !h2) {
    return (
      <S.H3 size={size} color={color}>
        {children}
      </S.H3>
    )
  }
  return (
    <S.H2 size={size} color={color}>
      {children}
    </S.H2>
  )
}
export default Heading
