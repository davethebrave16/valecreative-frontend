import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import { MainContent } from '@/datastore/models/maincontent.model';
import { ProductValue } from '@/datastore/models/productvalue.model';
import { HowItWorks } from '@/datastore/models/hiw.model';

type Props = {
  content: MainContent
  values: ProductValue
  hiw: HowItWorks
}

function Index(props: Props) {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero data={props.content} />
      <ProductValues data={props.values} />
      <ProductCategories data={props.content}  />
      <ProductHowItWorks data={props.hiw} />
      <ProductCTA data={props.content}  />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
