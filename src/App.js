import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Header />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
