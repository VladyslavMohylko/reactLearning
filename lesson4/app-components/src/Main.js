import React from 'react';
import './App.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hi',
    }
  }

  render() {
    return (
        <div className='App'>
            Main menu
        </div>
    )
  }
}

export default Main;