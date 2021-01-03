import './App.css';
import NavBar from './Components/Navbar';
import MusicContainer from './Containers/musicContainer'


function App() {
  return (
    <>
    <div className="navbarDiv"><NavBar /></div>
    <MusicContainer />
    </>
  );
}

export default App;
