import { Button } from 'components/Button'
import * as S from './styles'

const Main = () => {
  function handleClick() {
    alert('it works!')
  }
  return (
    <div>
      <S.Title>Next Starter</S.Title>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  )
}

export default Main
