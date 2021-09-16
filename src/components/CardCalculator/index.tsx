import Button from 'components/Button'
import * as S from './styles'

const CardCalculator = () => (
  <S.Wrapper>
    <S.Head>
      <h2>head</h2>
    </S.Head>
    <S.Body>
      <Button bgColor='lightGray'>C</Button>
      <Button bgColor='lightGray'>%</Button>
      <Button bgColor='lightGray'> ÷ </Button>
      <Button bgColor='lightGray'>x</Button>

      <Button bgColor='gray'>7</Button>
      <Button bgColor='gray'>8</Button>
      <Button bgColor='gray'>9</Button>
      <Button bgColor='lightGray'> + </Button>

      <Button bgColor='gray'>4</Button>
      <Button bgColor='gray'>5</Button>
      <Button bgColor='gray'>6</Button>
      <Button bgColor='lightGray'> ˗ </Button>

      <Button bgColor='gray'>1</Button>
      <Button bgColor='gray'>2</Button>
      <Button bgColor='gray'>3</Button>

      <Button bgColor='gray'>
        <S.BackspaceIcon />
      </Button>
      <Button bgColor='gray'>0</Button>
      <Button>.</Button>

      <S.Equal>
        <Button bgColor='primary'> = </Button>
      </S.Equal>
    </S.Body>
  </S.Wrapper>
)

export default CardCalculator
