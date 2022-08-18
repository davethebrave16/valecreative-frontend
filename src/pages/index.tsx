import type { NextPage } from 'next'
import Index from '@/ui/Home'
import styles from '@/styles/Home.module.css'
import { initialize } from '@/managers/initialization.manager';
import { MainContent } from '@/models/maincontent.model';
import { ProductValue } from '@/models/productvalue.model';
import { HowItWorks } from '@/models/hiw.model';
import Header from '@/ui/Header';

type Props = {
  mainContent: MainContent
  values: ProductValue
  hiw: HowItWorks
}

const Home: NextPage<Props> = ({ mainContent, values, hiw }: Props) => {
  return (
    <div className={styles.container}>
      <Header></Header>
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
