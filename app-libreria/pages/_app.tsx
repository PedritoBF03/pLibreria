import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes';
import { SWRConfig } from 'swr';
// import { NavBar } from '../components/commons';

export default function App({ Component, pageProps }: AppProps) {
  return (

    <SWRConfig
      value={{
        // refreshInterval: 500,
        fetcher: (resource, init ) => 
          fetch(resource, init ).then( res => res.json ())
      }}
    >
      <ThemeProvider theme={ lightTheme } >
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>

    // <ThemeProvider theme={ lightTheme } >
    //     {/* <NavBar /> */}
    //     <CssBaseline />
    //     <Component {...pageProps} />
    // </ThemeProvider>
  )
}

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
