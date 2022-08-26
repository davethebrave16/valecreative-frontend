import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@/ui/components/Typography';
import AppFooter from './views/AppFooter';
import AppAppBar from './views/AppAppBar';
import withRoot from './withRoot';
import { MainContent } from '@/models/maincontent.model';

type Props = {
    content: MainContent
}

function Index(props: Props) {
    return (
        <React.Fragment>
            <AppAppBar />
            <Container>
                <Box sx={{ mt: 7, mb: 12 }}>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        {props.content.galleryTitle}
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Index);