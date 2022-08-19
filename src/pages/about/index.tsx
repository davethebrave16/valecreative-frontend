import * as React from 'react';
import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import Index from '@/ui/About'
import { getAbout } from "@/api/about.api"
import { About } from '@/models/about.model';
import Header from '@/ui/Header';

type Props = {
  about: About
}

const About: NextPage<Props> = ({ about }: Props) => {

  return (
    <div className={styles.container}>
      <Header></Header>
      <Index about={about}></Index>
    </div>
    
  );
}

export async function getStaticProps() {
  const contents = await getAbout()
  return {
    props: {
      about: contents.data
    },
  }
}

export default About