import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Blog from './components/Blog';
import './styles/App.css';

const fakeTabs = [
    { label: 'Blog', link: '/blog', id: 1, selected: true },
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
            <Router>
                <div className="App">
                    <Navigation tabs={fakeTabs} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                </div>
            </Router>
        );
    }
}

export default App;
