import * as React from 'react';
import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import Index from '@/ui/ArtworkList'
import Header from '@/ui/Header';
import { MainContent } from '@/models/maincontent.model';
import { getGallery } from '@/managers/initialization.manager';
import { Artwork } from '@/models/artwork.model';

type Props = {
  content: MainContent,
  artworks: Artwork[]
}

const ArtworkList: NextPage<Props> = ({ content, artworks }: Props) => {

  return (
    <div className={styles.container}>
      <Header></Header>
      <Index content={content} artworks={artworks}></Index>
    </div>
    
  );
}

export async function getStaticProps() {
  const contents = await getGallery()
  return {
    props: {
      content: contents[0].data,
      artworks: contents[1].data
    },
  }
}

export default ArtworkList