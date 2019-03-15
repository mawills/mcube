import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Blog from './components/Blog';
import Analysis from './components/Analysis';
import Playtest from './components/Playtest';
import List from './components/List';
import Premium from './components/Premium';
import Decks from './components/Decks';
import './styles/App.css';

class App extends React.Component<{}, {}> {
    state = { serverMessage: '' };

    // componentDidMount() {
    //     fetch('/users')
    //         .then(res => res.json())
    //         .then(serverMessage =>
    //             this.setState({ serverMessage: serverMessage.message })
    //         );
    // }

    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/list" component={List} />
                    <Route exact path="/playtest" component={Playtest} />
                    <Route exact path="/premium" component={Premium} />
                    <Route exact path="/decks" component={Decks} />
                    <Route exact path="/analysis" component={Analysis} />
                    <div>Message from server: {this.state.serverMessage}</div>
                </div>
            </Router>
        );
    }
}

export default App;
