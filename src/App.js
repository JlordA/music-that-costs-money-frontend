import './App.css';
import NavBar from './Components/Navbar';
import Profile from './Containers/ProfileContainer';
import ForumContainer from './Containers/ForumContainer'
import LoginForm from './Components/Login';
import { Route, Switch } from 'react-router-dom'



function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/forum" component={ForumContainer} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
