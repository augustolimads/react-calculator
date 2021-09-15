import * as S from './styles'

export type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <S.Wrapper>
    <span>{children}</span>
  </S.Wrapper>
)

export default Container
