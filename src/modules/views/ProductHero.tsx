import { MainContent } from '@/models/maincontent.model';
import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

let backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

type Props = {
  data: MainContent
}

export default function ProductHero(props: Props) {
  if (props.data.headerImageUrl) {
      backgroundImage = props.data.headerImageUrl
  }

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        {props.data.headerTitle}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        {props.data.headerSubtitle}
      </Typography>
    </ProductHeroLayout>
  );
}
