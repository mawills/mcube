import React, { Component } from 'react';
import Navigation from './Navigation';
import './App.css';

const fakeTabs = [
  { name: 'tab 1', link: '#', id: 1, selected: true },
  { name: 'tab 2', link: '#', id: 2 },
  { name: 'tab 3', link: '#', id: 3 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation tabs={fakeTabs} />
      </div>
    );
  }
}

export default App;
