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
import Markdown from '@/ui/components/Markdown';

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
  close: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void,
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
            <Typography sx={{ ml: 2, flex: 1, color: 'common.white' }} variant="h6" component="div">
              {props.artwork.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Image
          src={props.artwork.picture}
          alt={props.artwork.title}
          width={600}
          height={500}
        >
        </Image>
        <Markdown>
          {'Anno: ' + props.artwork.year}
        </Markdown>
        <Markdown>
          {'Tecnica: ' + props.artwork.technique}
        </Markdown>
        <Markdown>
          {'Dimensioni: ' + props.artwork.size}
        </Markdown>
        <Markdown>
          {props.artwork.description}
        </Markdown>
      </Dialog>
    </div>
  );
}

export default ArtworkDialog