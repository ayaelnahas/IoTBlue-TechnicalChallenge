
import UserList from '../../Components/User/UserList'
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Footer from '../../Components/Common/Footer/Footer';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: theme.spacing(10),
        }
    }));



export default function MainPage() {
   
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.root}>
            <UserList />
            <Footer/>
        </Container>
    )
}
