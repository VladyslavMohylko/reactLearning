import React from 'react';
import './App.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hi',
    }
  }

  render() {
    return (
        <div className='App'>
            About user
        </div>
    )
  }
}

export default About;