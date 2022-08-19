import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '@/ui/components/Typography';
import Snackbar from '@/ui/components/Snackbar';
import AppFooter from '@/ui/views/AppFooter';
import AppAppBar from '@/ui/views/AppAppBar';
import AppForm from '@/ui/views/AppForm';
import { email, required } from '@/ui/form/validation';
import RFTextField from '@/ui/form/RFTextField';
import FormButton from '@/ui/form/FormButton';
import FormFeedback from '@/ui/form/FormFeedback';
import withRoot from './withRoot';
import { postContact } from '@/api/contact.api';
import { MainContent } from '@/models/maincontent.model';

type Props = {
    content: MainContent
}

async function sendContactForm(
    name: string,
    email: string,
    phone: string,
    subject: string,
    setSent: Function,
    setSuccess: Function) {
    const result = await postContact(
        name,
        email,
        phone,
        subject
    )
    setSent(false)
    setSuccess(true)
}

function Index(props: Props) {
    const [sent, setSent] = React.useState(false)
    const [success, setSuccess] = React.useState(false)

    const validate = (values) => {
        const errors = required(['name', 'email', 'subject'], values);

        if (!errors.email) {
            const emailError = email(values.email);
            if (emailError) {
                errors.email = emailError;
            }
        }

        return errors;
    };

    const handleSubmit = (values) => {
        setSent(true)
        sendContactForm(values.name, values.email, values.phone, values.subject, setSent, setSuccess)
    };

    const handleSuccessClose = () => {
        setSuccess(false);
    };

    return (
        <React.Fragment>
            <AppAppBar />
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        {props.content.contactPageTitle}
                    </Typography>
                    <Typography variant="body2" align="center">
                        {props.content.contactPageSubtitle}
                    </Typography>
                </React.Fragment>
                <Form
                    onSubmit={handleSubmit}
                    subscription={{ submitting: true }}
                    validate={validate}
                >
                    {({ handleSubmit: handleSubmit2, submitting }) => (
                        <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        autoFocus
                                        component={RFTextField}
                                        disabled={submitting || sent}
                                        autoComplete="given-name"
                                        fullWidth
                                        label="Il tuo nome"
                                        name="name"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        component={RFTextField}
                                        disabled={submitting || sent}
                                        autoComplete="family-name"
                                        fullWidth
                                        label="Telefono"
                                        name="phone"
                                    />
                                </Grid>
                            </Grid>
                            <Field
                                autoComplete="email"
                                component={RFTextField}
                                disabled={submitting || sent}
                                fullWidth
                                label="Email"
                                margin="normal"
                                name="email"
                                required
                            />
                            <Field
                                fullWidth
                                component={RFTextField}
                                disabled={submitting || sent}
                                required
                                name="subject"
                                autoComplete="subject"
                                label="Oggetto"
                                margin="normal"
                            />
                            <FormSpy subscription={{ submitError: true }}>
                                {({ submitError }) =>
                                    submitError ? (
                                        <FormFeedback error sx={{ mt: 2 }}>
                                            {submitError}
                                        </FormFeedback>
                                    ) : null
                                }
                            </FormSpy>
                            <FormButton
                                sx={{ mt: 3, mb: 2 }}
                                disabled={submitting || sent}
                                color="secondary"
                                fullWidth
                            >
                                {submitting || sent ? 'Invio in corso…' : 'Invia'}
                            </FormButton>
                        </Box>
                    )}
                </Form>
            </AppForm>
            <Snackbar
                open={success}
                closeFunc={handleSuccessClose}
                message={props.content.contactSuccessMessage}
            />
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Index);