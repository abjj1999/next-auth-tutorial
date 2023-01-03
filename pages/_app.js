import {SessionProvider} from 'next-auth/react'
import { ChakraProvider,Grid } from '@chakra-ui/react'

export default function App({ Component, pageProps: {
  session, ...pageProps
} }) {
  return(
    <SessionProvider session={session}>
      <ChakraProvider>
        <Grid sx={{
          height: '100vh',
          placeItems: 'center',
          px: '5rem',
          textAlign: 'center'
        }} >

         <Component {...pageProps} />
        </Grid>
      </ChakraProvider>
    </SessionProvider>
  )
}
