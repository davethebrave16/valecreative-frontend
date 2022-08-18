import type { NextPage } from 'next'
import Head from 'next/head'
import Index from '../modules/Home'
import styles from '../../styles/Home.module.css'
import { initialize } from '@/managers/initialization.manager';
import { MainContent } from '@/datastore/models/maincontent.model';
import { ProductValue } from '@/datastore/models/productvalue.model';
import { HowItWorks } from '@/datastore/models/hiw.model';

type Props = {
  mainContent: MainContent
  values: ProductValue
  hiw: HowItWorks
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
