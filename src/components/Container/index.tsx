import { Children } from 'types/children'
import * as S from './styles'

export type ContainerProps = {
  children: Children
}

const Container = ({ children }: ContainerProps) => (
  <S.Wrapper>
    <span>{children}</span>
  </S.Wrapper>
)

export default Container
