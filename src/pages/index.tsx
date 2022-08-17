import type { NextPage } from 'next'
import Head from 'next/head'
import Index from './Home'
import styles from '../../styles/Home.module.css'
import { getMainContent } from '../datastore/api/main.api';

type Props = {
  content: Record<string, unknown>
}

const Home: NextPage<Props> = ({ content }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vale Creative</title>
        <meta name="description" content="Vale Creative Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Index content={content}></Index>

    </div>
  )
}

export async function getStaticProps() {
  const mainContent = await getMainContent()
  return {
    props: {
      content: mainContent.data,
    },
  }
}

export default Home
