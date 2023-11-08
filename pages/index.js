import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Google Drive</title>
        <link rel="icon" href="/google-drive-logo-0-1.png"/>
      </Head>

      <main>
        <table>
          <tr>
            <th>Apps</th>
            <th>Games</th>
            <th>Resorces</th>
          </tr>
        </table>
      </main>

      <Footer />
    </div>
  )
}
