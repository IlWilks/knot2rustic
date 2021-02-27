import logo from './logo.svg';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
    </ParallaxProvider>
  );
}

export default App;
