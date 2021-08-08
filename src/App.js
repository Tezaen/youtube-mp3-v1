import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar title={'My Own Youtube to MP3 Converter!'}/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
