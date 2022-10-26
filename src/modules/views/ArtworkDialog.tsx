import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Artwork } from '@/models/artwork.model';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import ImageGallery from 'react-image-gallery';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  show: boolean,
  close: () => void,
  artworks: Artwork[]
  selectedItem: number
}

const ArtworkDialog = (props: Props) => {
  console.log(props.artworks);
  const images = props.artworks.map((item) => {
    return {
      'original': (item.largePicture) ? item.largePicture : item.originalPicture,
      'thumbnail': item.thumbnailPicture,
      'description': item.title + "    |    " + ((item.year) ? item.year : "") + ' - ' + item.technique + ' - ' + item.size
    }
  });

  return (
    <div>
      <Dialog
        fullScreen
        open={props.show}
        onClose={props.close}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'fixed', background: 'transparent' }} elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              onClick={props.close}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container
          component="section"
          maxWidth='lg'>
          <Box component='div' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <ImageGallery 
            items={images} 
            startIndex={props.selectedItem}
            thumbnailPosition="right" />
          </Box>
        </Container>
      </Dialog>
    </div>
  );
}

export default ArtworkDialog