import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>Next Starter with redux and sass</title>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta
          name='description'
          content='A simple project starter to work with typescript, React, NextJs, Redux Toolkit and Sass+Css-modules'
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
