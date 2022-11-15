import React from 'react';
import {BrowserRouter as Router, Routes as Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Main';
import About from './About';
import Contacts from './Contacts';
import Other from './Other';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hi',
    }
  }

  render() {
    const a = 55;
    const b = {name: 'Ivan'};
    let c = ['ku', 'hai', 'cool'];
    return (
      <Router>
        <div className='App'>
          <ul>
            <li><a href="/">Main</a></li>
            <li><a href='/ab'>About</a></li>
            <li><a href='/con'>Contacts</a></li>
          </ul>
          <Switch>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/ab' element={<About />}></Route>
            <Route exact path='/con' element={<Contacts />}></Route>
            <Route path='*' element={<Other />}></Route>
          </Switch>
        </div>
      </Router>
      );
  }
}

export default App;
