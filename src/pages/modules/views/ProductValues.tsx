import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImagesearchRollerOutlinedIcon from '@mui/icons-material/ImagesearchRollerOutlined';
import { ProductValue } from '@/datastore/models/productvalue.model';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
  svg: {
    transform: 'scale(3.5)'
  }
};

type Props = {
  data: ProductValue
}

function ProductValues(props: Props) {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light', color: 'primary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <BrushOutlinedIcon />
              <Typography variant="h6" sx={{ my: 5 }}>
                { props.data.value1Title }
              </Typography>
              <Typography variant="h5">
                { props.data.value1Description }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <PaletteOutlinedIcon />
              <Typography variant="h6" sx={{ my: 5 }}>
                { props.data.value2Title }
              </Typography>
              <Typography variant="h5">
                { props.data.value2Description }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <ImagesearchRollerOutlinedIcon />
              <Typography variant="h6" sx={{ my: 5 }}>
                { props.data.value3Title }
              </Typography>
              <Typography variant="h5">
                { props.data.value3Description }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
