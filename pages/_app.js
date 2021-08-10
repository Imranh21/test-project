import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme/theme';
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps}/>
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
