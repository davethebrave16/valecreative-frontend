import type { NextPage } from 'next'
import Head from 'next/head'
import Index from './Home'
import styles from '../../styles/Home.module.css'
import { initialize } from '@/managers/initialization.manager';

type Props = {
  mainContent: Record<string, unknown>
  values: Record<string, unknown>
  hiw: Record<string, unknown>
}

const Home: NextPage<Props> = ({ mainContent, values, hiw }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vale Creative</title>
        <meta name="description" content="Vale Creative Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Index content={mainContent} values={values} hiw={hiw}></Index>

    </div>
  )
}

export async function getStaticProps() {
  const contents = await initialize()
  return {
    props: {
      mainContent: contents[0].data,
      values: contents[1].data,
      hiw: contents[2].data,
    },
  }
}

export default Home
