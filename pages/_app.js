import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from "react-hot-toast"
import '../styles/globals.css'
import Hotjar from '@hotjar/browser';

const siteId = 3812917;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);


function MyApp({ Component, pageProps }) {
  

  return (
    <StateContext>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
