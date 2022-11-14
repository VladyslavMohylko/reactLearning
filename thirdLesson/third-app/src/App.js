import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello',
      text2: 1 
    }
    this.showText = this.showText.bind(this);
  }

  showText() {
    console.log('World');
    this.setState({ text: 'hi' });
  }

  showText2 = (event) => {
    this.setState({ text2: event.target.value});
    console.log(event.target.value);
  }

  move(event) {
    console.log(event.target.textContent)
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.showText}>Push1</button>
        <input defaultValue={this.state.text} onInput={this.showText2} />
        <div onMouseMove={this.move}>Lorem</div>
        <p>{this.state.text}</p>
        <p>{this.state.text2}</p>
      </div>
    )
  }

}

export default App;
