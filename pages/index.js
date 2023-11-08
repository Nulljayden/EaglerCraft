import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Google Drive</title>
        <link rel="icon" href="/google-drive-logo-0-1.png" width=800 height=600/>
      </Head>

      <main>
        <table>Apps</table>
      </main>

      <Footer />
    </div>
  )
}
