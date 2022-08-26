import * as React from 'react';
import ProductCategories from './views/ProductCategories';
import AppFooter from './views/AppFooter';
import ProductHero from './views/ProductHero';
import ProductValues from './views/ProductValues';
import ProductHowItWorks from './views/ProductHowItWorks';
import ProductCTA from './views/ProductCTA';
import AppAppBar from './views/AppAppBar';
import withRoot from './withRoot';
import { MainContent } from '@/models/maincontent.model';
import { ProductValue } from '@/models/productvalue.model';
import { HowItWorks } from '@/models/hiw.model';
import { ArtworkType } from '@/models/artworktype.model';

type Props = {
  content: MainContent
  values: ProductValue
  hiw: HowItWorks,
  artworkTypes: ArtworkType[]
}

function Index(props: Props) {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero data={props.content} />
      <ProductValues data={props.values} />
      <ProductCategories data={props.content} categories={props.artworkTypes}  />
      <ProductHowItWorks data={props.hiw} />
      <ProductCTA data={props.content}  />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
