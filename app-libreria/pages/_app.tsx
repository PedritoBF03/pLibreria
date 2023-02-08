import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes';
// import { NavBar } from '../components/commons';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ lightTheme } >
        {/* <NavBar /> */}
        <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
