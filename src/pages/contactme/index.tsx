import * as React from 'react';
import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import Index from '@/ui/ContactForm'
import Header from '@/ui/Header';
import { MainContent } from '@/models/maincontent.model';
import { getMainContent } from '@/api/main.api';

type Props = {
  content: MainContent
}

const ContactForm: NextPage<Props> = ({ content }: Props) => {

  return (
    <div className={styles.container}>
      <Header></Header>
      <Index content={content}></Index>
    </div>
    
  );
}

export async function getStaticProps() {
  const contents = await getMainContent()
  return {
    props: {
      content: contents.data
    },
  }
}

export default ContactForm