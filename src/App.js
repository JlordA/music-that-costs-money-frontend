import './App.css';
import NavBar from './Components/Navbar';
import Profile from './Containers/ProfileContainer';
import ForumContainer from './Containers/ForumContainer'
import LoginForm from './Components/Profile/Login';
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './Components/Home';



function App() {
  return (
    <>
      <NavBar />
      <Route path="/home" component={Home}/>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/forum" component={ForumContainer} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </>
  );
}

function msp(state){
  return{
    user: state.user
  }

}

export default connect(msp)(App);
