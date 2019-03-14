import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Blog from './components/Blog';
import './styles/App.css';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                </div>
            </Router>
        );
    }
}

export default App;
