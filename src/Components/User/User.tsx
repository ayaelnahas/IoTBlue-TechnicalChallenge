

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { User as UserType } from '../../Interfaces/User';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            alignItems: 'center',

        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 150,
        },
        button: {
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'right',
            paddingLeft: theme.spacing(3),
            paddingBottom: theme.spacing(1),
        }
    }));

interface Props {
    getDataById: (id: string) => void;
    data: UserType;
    className?: string
}

export default function User(props: Props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={props.data.picture}
                title={props.data.firstName}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.data.firstName} {props.data.lastName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.data.id}
                    </Typography>
                </CardContent>
                <CardActions className={classes.button}>
                    <Button onClick={() => props.getDataById(props.data.id)} size="small" color="primary">
                        <ArrowForwardIosIcon />
                    </Button>
                </CardActions>
            </div>

        </Card >
    );
}
