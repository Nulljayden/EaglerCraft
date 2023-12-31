import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

table {
  border: 1px solid;
  border-style: outset;
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Google Drive</title>
        <link rel="icon" href="/google-drive-logo-0-1.png"/>
      </Head>

      <main>
        <table>
          <td>Apps</td>
          <td>Games</td>
          <td>Resorces</td>
        </table>
        <a href="index (1).html">
          <button>Button</button>
        </a>
      </main>

      <Footer />
    </div>
  )
}
