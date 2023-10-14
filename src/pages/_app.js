import Header from '@/Components/Header/Header'
import '@/styles/globals.css'
import "@/styles/styles.css"
import "@/styles/Ionic.css"

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}
