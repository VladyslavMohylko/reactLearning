import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hi',
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {text: props.text}
  // }

  test() {
    return 111;
  }

  changer = (event) => {
    console.log(event.target.value);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: 'Component did mount' })
    }, 2000);
  }

  render() {
    const a = 55;
    const b = {name: 'Ivan'};
    let c = ['ku', 'hai', 'cool'];
    return (
      <div>
        <p>{this.state.text}</p>
        <h1>{3 + 6}</h1>
        <ul>
          {c.map(elem => {
            return <li key={elem}>{elem}</li>
          })}
        </ul>
        <div>{Math.random()}</div>
        <div>{this.test()}
          <p>{a + 'HELLO'}</p>
        </div>
        <div {...b}></div>
        <input defaultValue="hello" onChange={this.changer}/>
      </div>
    );
  }
}

export default App;
