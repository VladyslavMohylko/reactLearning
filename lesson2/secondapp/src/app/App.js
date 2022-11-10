import React from 'react';
import './App.css';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import Main from '../main/Main';
import Footer from '../footer/Footer';


class App extends React.Component {
  render() {
    const nav = this.props.nav;
    return (
      <div className="App">
        <Header />
        <h1>{this.props.title}</h1>
        <Nav nav={nav}/>
        <Main />
        <p>{this.props.hero}</p>
        <Footer />
      </div>
    );
  }
}

export default App;
