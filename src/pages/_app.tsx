import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth } from '../config/Auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth>
      <Component {...pageProps} />
    </Auth>
  );
}

export default MyApp
