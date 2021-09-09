
import useFetch from '../../Hooks/useFetch'
import User from './User'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: theme.spacing(10),
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        button: {
            marginBottom: theme.spacing(5),
        },
    }));


export default function UserList() {

    const classes = useStyles();
    const { data, loading, error, moveToUserData, moveToUserForm } = useFetch()

    return (
        <Container maxWidth="md" className={classes.root} >
            <Grid >
                {loading ? <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CircularProgress size={100} />
                </Grid> : null}
            </Grid>
            <Grid>
                {error ? <Grid item xs={12} sm={12} md={12} lg={12}><Alert severity="error">{error}</Alert></Grid> : null}
            </Grid>
            <Grid container spacing={1}>
                <Grid container justifyContent="center" alignItems="center" >
                    {!loading ?
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            onClick={moveToUserForm}
                        >
                            <AddIcon /><strong>Add User</strong>
                        </Button> : null}

                </Grid>
                {
                    data.map((el: any) => (
                        <Grid key={el.id} item xs={12} sm={12} md={6} lg={6} >
                            <User getDataById={moveToUserData} data={el} className={classes.paper} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container >

    )

}