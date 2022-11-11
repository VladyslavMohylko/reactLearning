import React from 'react';
import './App.css';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Form from '../form/Form';


class App extends React.Component {
  render() {
    const nav = this.props.nav;
    const title = this.props.title;
    const hero = this.props.hero;

    return (
      <div className="App">
        <Header title={title}/>
        <Nav nav={nav}/>
        <Main />
        <Form />
        <Footer hero={hero}/>
      </div>
    );
  }
}

export default App;
