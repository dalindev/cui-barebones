import { StrictMode } from 'react'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  )
}

export default App
