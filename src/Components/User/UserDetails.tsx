
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router-dom";
import useFetchById from '../../Hooks/useFetchById'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';




const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '1 0 auto',
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(10),
        },
        media: {
            height: 150,
            width: 150,
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
            borderRadius: '50%',
            marginBottom: 10

        },
        data: {
            display: 'flex',
            justifyContent: 'left'
        },
        button: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(3),
            margin: 'auto',
            width: '50%',
            textAlign: 'center',
            padding: 10
        },
        progress: {
            marginTop: theme.spacing(5),
        }

    }));


export default function UserDetails() {
    const classes = useStyles();
    const { id } = useParams<{ id: string }>();
    const { data, loading} = useFetchById(id)
    const history = useHistory();

    function moveToHome() {
        history.push(`/user`);
    }

    if (!loading && data) {
        return (
            <Container maxWidth="sm">
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={data.picture}
                        title="Contemplative Reptile"
                    />
                    <CardContent >
                        <Typography gutterBottom component="h5">
                            ID: {data.id}
                        </Typography>
                        <Typography gutterBottom component="h4">
                            First Name: {data.firstName}
                        </Typography>
                        <Typography gutterBottom component="h5">
                            Last Name: {data.lastName}
                        </Typography>
                        <Typography gutterBottom component="h5">
                            Gender: {data.gender}
                        </Typography>

                        <Typography gutterBottom component="h5">
                            Phone: {data.phone}
                        </Typography>
                        <Typography gutterBottom component="h5">
                            Location
                            <Typography variant="body2" color="textSecondary" >
                                Country: {data.location.country}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" >
                                City: {data.location.city}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" >
                                State: {data.location.state}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" >
                                Street: {data.location.street}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" >
                                Timezone: {data.location.timezone}
                            </Typography>
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={moveToHome}>
                            Return Home
                            <ArrowForwardIcon />
                        </Button>
                    </CardActions>
                </Card>

            </Container>
        );
    } else {
        return (
            <Container maxWidth="sm">
                <Grid >
                    {loading ? <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CircularProgress className={classes.progress} size={100} />
                    </Grid> : null}
                </Grid>
            </Container>
        )
    }
}
