import './App.css';
import MainPage from './Pages/Main/MainPage'
import UserDetails from './Pages/UserDetails/UserDetailsPage'
import Header from './Components/Common/Header/Header'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import UserForm from './Components/User/UserAddForm';
function App() {
  let routes = (
    <>
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={MainPage} />
        <Route path="/user" exact component={MainPage} />
        <Route path="/user/create" exact component={UserForm} />
        <Route path="/user/:id" exact component={UserDetails} />
        <Route
          render={() => {
            return "not found!!!";
          }}
        />
      </Switch>
    </>)
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        {routes}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
