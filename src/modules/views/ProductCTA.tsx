import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';
import { MainContent } from '@/models/maincontent.model';

let image =
  'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750';

type Props = {
  data: MainContent
}

function ProductCTA(props: Props) {
  if (props.data.contactImageUrl) {
    image = props.data.contactImageUrl
  }

  return (
    <Container component="section" sx={{ mt: 10, mb: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                {props.data.contactTitle}
              </Typography>
              <Typography variant="h5">
                {props.data.contactSubtitle}
              </Typography>
              <Link href="/contactme">
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ width: '100%' }}
                >
                  {props.data.contactButton}
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src={image}
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductCTA;
