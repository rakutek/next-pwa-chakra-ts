import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const App: ({ Component, pageProps }: AppProps) => JSX.Element = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
