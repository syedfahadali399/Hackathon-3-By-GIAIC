// pages/_app.tsx
import type { AppProps } from 'next/app'
import { WishlistProvider } from './wishlistContext' // adjust the path

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WishlistProvider>
      <Component {...pageProps} />
    </WishlistProvider>
  )
}

export default MyApp

