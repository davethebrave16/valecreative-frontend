import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Artwork } from '@/models/artwork.model';
import Image from 'next/image';
import { Container } from '@mui/system';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

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
  artwork: Artwork
}

const ArtworkDialog = (props: Props) => {

  return (
    <div>
      <Dialog
        fullScreen
        open={props.show}
        onClose={props.close}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.close}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, color: 'common.white' }}
              variant="h6"
              component="div">
              {props.artwork.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container
          component="section"
          maxWidth='lg'
          sx={{ mt: 2 }}>
          <Box component='div' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={props.artwork.picture}
              alt={props.artwork.title}
              layout={'fill'}
              objectFit={'contain'}
            >
            </Image>
          </Box>
          <Stack spacing={2}>
            <Item>
              <Typography component='div'>
                <Box component="span" fontWeight='fontWeightMedium'>Anno: </Box>{props.artwork.year}
              </Typography>
            </Item>
            <Item>
              <Typography>
                <Box component="span" fontWeight='fontWeightMedium'>Tecnica: </Box>{props.artwork.technique}
              </Typography>
            </Item>
            <Item>
              <Typography>
                <Box component="span" fontWeight='fontWeightMedium'>Dimensioni: </Box>{props.artwork.size}
              </Typography>
            </Item>
            <Item>
              <Typography>
                {props.artwork.description}
              </Typography>
            </Item>
          </Stack>
        </Container>
      </Dialog>
    </div>
  );
}

export default ArtworkDialog