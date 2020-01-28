import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

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
            </div>
        );
    }
}
export default App;
