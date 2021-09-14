import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'theme/global'
import { theme } from 'theme'
import store from 'store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CookiesProvider>
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
      </CookiesProvider>
    </Provider>
  )
}
export default MyApp
