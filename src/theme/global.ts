import { createGlobalStyle, css } from 'styled-components'
import { reset } from './reset'

export default createGlobalStyle`
${reset}	

::selection {
    ${({ theme }) => css`
      color: ${theme.colors.background};
      background: ${theme.colors.primary};
    `}
}

.icon {
    height: 1rem;
    width: 1rem;
}

.icon-tiny {
    height: 0.5rem;
    width: 0.5rem;
}

.icon-large {
    height: 1.5rem;
    width: 1.5rem;
}
`
