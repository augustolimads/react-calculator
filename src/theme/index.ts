import { colors } from './colors'
import { fontWeights, fontSizes } from './fonts'
import { breakpoints, zIndex } from './sizes'

export const theme = {
  colors,
  breakpoints,
  zIndex,
  fontSizes,
  fontWeights
}

export type ThemeType = typeof theme
