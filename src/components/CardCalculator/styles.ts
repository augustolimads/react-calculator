import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background: inherit;
  width: 28em;
  ${media.lessThan('medium')`
  width: calc(100vw - 2.5em);
  `}
`

export const Head = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.4em;
  ${media.lessThan('medium')`
  height: 8em;
  `}
`

export const Body = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
`
export const Equal = styled.h2`
  grid-column: 4 / 4;
  grid-row-start: 4;
  grid-row-end: span 5;
  height: 100%;
  width: 100%;
`
