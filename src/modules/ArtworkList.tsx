import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@/ui/components/Typography';
import AppFooter from '@/ui/views/AppFooter';
import AppAppBar from '@/ui/views/AppAppBar';
import ArtworkDialog from '@/ui/views/ArtworkDialog';
import withRoot from './withRoot';
import { MainContent } from '@/models/maincontent.model';
import { Artwork } from '@/models/artwork.model';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';

type Props = {
    content: MainContent,
    artworks: Artwork[]
}

function Index(props: Props) {
    const [openArtworkDialog, setOpenArtworkDialog] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(props.artworks[0]);

    const handleClickOpen = (index: number) => {
        setSelectedItem(props.artworks[index])
        setOpenArtworkDialog(true);
    };

    const handleClose = () => {
        setOpenArtworkDialog(false);
    };

    return (
        <React.Fragment>
            <AppAppBar />
            <Container>
                <Box sx={{ mt: 7, mb: 12 }}>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        {props.content.galleryTitle}
                    </Typography>
                    <ImageList>
                        {props.artworks.map((item, index) => (
                            <ImageListItem key={item.id}>
                                <img
                                    src={item.picture}
                                    srcSet={item.picture}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.year + ' - ' + item.technique + ' - ' + item.size}
                                    actionIcon={
                                        <Tooltip title="Clicca per maggiori dettagli" arrow>
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${item.title}`}
                                                onClick={() => handleClickOpen(index)}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Container>
            <AppFooter />
            <ArtworkDialog show={openArtworkDialog} close={() => handleClose()} artwork={selectedItem}></ArtworkDialog>
        </React.Fragment>
    );
}

export default withRoot(Index);