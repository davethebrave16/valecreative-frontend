import type { NextPage } from 'next'
import Head from 'next/head'
import Index from './Home'
import styles from '../../styles/Home.module.css'
import { getMainContent } from '../datastore/api/main.api';
import type { GetStaticProps } from 'next'

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

export const getStaticProps: GetStaticProps = async () => {
  const mainContent = getMainContent()
  return {
    props: {
      fallback: { ...mainContent },
    },
  }
}

export default Home
