import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// You change this configuration value to false so that the Font Awesome core SVG library will not try and insert <style> elements into the <head> of the page. Next.js blocks this from happening anyway so you might as well not even try.
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
