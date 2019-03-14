import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './styles/App.css';

const fakeTabs = [
  { label: 'Blog', link: '#', id: 1, selected: true },
  { label: 'List', link: '#', id: 2 },
  { label: 'Playtest', link: '#', id: 3 },
  { label: 'Premium', link: '#', id: 4 },
  { label: 'Tokens', link: '#', id: 5 },
  { label: 'Decks', link: '#', id: 6 },
  { label: 'Analysis', link: '#', id: 7 },
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
