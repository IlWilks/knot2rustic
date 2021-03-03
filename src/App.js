import logo from './logo.svg';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from './components/Contact';
import Moreworks from './components/Moreworks';
import Navbar from './components/Navbar';

function App() {
  return (
    <ParallaxProvider>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/more'component={Moreworks}/>
      </Switch>
    </ParallaxProvider>
  );
}

export default App;
