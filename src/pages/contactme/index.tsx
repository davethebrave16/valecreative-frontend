import * as React from 'react';
import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import Index from '@/ui/ContactForm'
import Header from '@/ui/Header';

const ContactForm: NextPage = () => {

  return (
    <div className={styles.container}>
      <Header></Header>
      <Index></Index>
    </div>
    
  );
}

export default ContactForm