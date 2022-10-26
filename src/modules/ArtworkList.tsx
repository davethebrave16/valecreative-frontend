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
import { styled } from '@mui/material/styles';

const ImageGalleryList = styled('ul')(({ theme }) => ({
    display: 'grid',
    padding: 0,
    margin: theme.spacing(0, 4),
    gap: 8,
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(4, 1fr)'
    },
    [theme.breakpoints.up('xl')]: {
        gridTemplateColumns: 'repeat(5, 1fr)'
    },
}));

type Props = {
    content: MainContent,
    artworks: Artwork[]
}

function Index(props: Props) {
    const [openArtworkDialog, setOpenArtworkDialog] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(0);

    const handleClickOpen = (index: number) => {
        setSelectedItem(index)
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
                    <ImageGalleryList
                        
                        rowHeight={350}
                    >
                        {props.artworks.map((item, index) => (
                            <ImageListItem key={item.id}>
                                <img
                                    src={(item.smallPicture) ? item.smallPicture : item.originalPicture}
                                    srcSet={(item.smallPicture) ? item.smallPicture : item.originalPicture}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ overflow: "hidden" }}
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
                    </ImageGalleryList>
                </Box>
            </Container>
            <AppFooter />
            <ArtworkDialog
                show={openArtworkDialog}
                close={() => handleClose()}
                artworks={props.artworks}
                selectedItem={selectedItem}></ArtworkDialog>
        </React.Fragment>
    );
}

export default withRoot(Index);