import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Controller, useForm } from "react-hook-form";
import useAddUser from './../../Hooks/useAddUser';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {

    const classes = useStyles();

    const { handleSubmit, control } = useForm();
    const { error, submitData } = useAddUser()
    const onSubmit = (data: any) => {
        submitData(data)
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create User
                </Typography>
                <Grid container>
                    {error ? <Grid item xs={12} sm={12} md={12} lg={12}><Alert severity="error">{error}</Alert>
                    </Grid> : null}
                </Grid>

                <ValidatorForm onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                    <Controller
                        name={"firstName"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                validators={['required']}
                                errorMessages={['this field is required']}
                                fullWidth
                                name='firstName'
                                error={error ? true : false}
                                onChange={onChange} value={value} label={"First Name"} />
                        )}
                    />
                    <Controller
                        name={"lastName"}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextValidator variant="outlined"
                                margin="normal"
                                validators={['required']}
                                errorMessages={['this field is required']}
                                name='lastName'
                                label={"Last Name"}
                                error={error ? true : false}
                                fullWidth onChange={onChange} value={value} />
                        )}
                    />
                    <Controller
                        name={"email"}
                        control={control}
                        render={({ field: { onChange, value } }) => (

                            <TextValidator
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                autoFocus
                                name='email'
                                type="email"
                                label="Email Address"
                                error={error ? true : false}
                                onChange={onChange} value={value} />
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit} >Submit</Button>
                </ValidatorForm>
            </div>

        </Container>
    );
}