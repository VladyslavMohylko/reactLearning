import React from 'react';
import './App.css';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hi',
    }
  }

  render() {
    return (
        <div className='App'>
            Contacts
        </div>
    )
  }
}

export default Contacts;