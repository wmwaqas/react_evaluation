import React, { Component } from 'react';
import './App.css';
// import Title from './components/Title'
import BatchesContainer from './batches/BatchesContainer'

const batches = [
  {
    title: 'Batch # 1',
    students: 'No of Students ' + 6,
  },
  {
    title: 'Batch # 2',
    students: 'No of Students ' + 6,
  },
  {
    title: 'Batch # 3',
    students: 'No of Students ' + 6,
  },
]



class App extends Component {
  render() {
    return (
      <div className="App">
      <BatchesContainer batches={ batches } />
      </div>
    );
  }
}

export default App;
