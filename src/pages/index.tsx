import type { NextPage } from 'next'
import Head from 'next/head'
import Index from './Home'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vale Creative</title>
        <meta name="description" content="Vale Creative Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Index></Index>

    </div>
  )
}

export default Home
