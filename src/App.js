import React, { Component } from 'react';
import './App.css';
// import Title from './components/Title'
import BatchesContainer from './batches/BatchesContainer'
import PropTypes from 'prop-types'




const students = [
  {
    name: 'John',
    photo: 'No of Students',
    red: false,
    yellow: false,
    green: false,
  },
  {
    name: 'Tom',
    photo: 'No of Students',
    red: false,
    yellow: false,
    green: false,
  },
  {
    name: 'Micheal',
    photo: 'No of Students',
    red: false,
    yellow: false,
    green: false,
  },
  {
    name: 'Tim',
    photo: 'No of Students',
    red: false,
    yellow: false,
    green: false,
  },
  {
    name: 'Bob',
    photo: 'No of Students',
    red: false,
    yellow: false,
    green: false,
  },
  {
    name: 'Harry',
    photo: 'No of Students',
    red: false,
    yellow: false,
    green: false,
  },
]



class App extends Component {
  render() {
    return (
      <div className="App">
      <BatchesContainer/>
      { this.props.children }
      </div>
    );
  }
}

export default App;
