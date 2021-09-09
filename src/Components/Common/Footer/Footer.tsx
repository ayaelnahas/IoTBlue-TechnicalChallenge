
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                IoTBlue
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    footer: {
        
        padding: theme.spacing(1),
        marginTop: theme.spacing(10),
        position: 'relative',
        left: 0,
        bottom: 0,
        width: '100%'
    },
}));
export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    It was nice doing this challenge, looking forward to hearing from you!
                </Typography>
                <Copyright />
            </footer>
        </div>
    )
}
