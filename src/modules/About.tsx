import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from '@/ui/components/Markdown';
import Typography from '@/ui/components/Typography';
import AppFooter from './views/AppFooter';
import AppAppBar from './views/AppAppBar';
import withRoot from './withRoot';
import { About } from '@/models/about.model';

type Props = {
    about: About
}

function Index(props: Props) {
    return (
        <React.Fragment>
            <AppAppBar />
            <Container>
                <Box sx={{ mt: 7, mb: 12 }}>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        {props.about.aboutTitle}
                    </Typography>
                    <Markdown>
                        {props.about.aboutDescription}
                    </Markdown>
                </Box>
            </Container>
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Index);