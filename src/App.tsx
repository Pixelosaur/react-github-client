import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { Route, Switch, Redirect } from 'react-router';
import GitHubUsers from './pages/GitHubUsers/GitHubUsers';
import Following from './pages/Following/Following';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Navigation />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Switch>
                            <Route path="/github-users" component={GitHubUsers} />
                            <Route path="/following" component={Following} />
                            <Redirect from="/" to="github-users" exact/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
