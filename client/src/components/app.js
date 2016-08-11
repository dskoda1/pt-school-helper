import React from 'react';
import { GaitTable } from './table/GaitTable';
import { Navbar } from './navbar';
import { Home } from './home';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="app">
                    <Navbar />
                <div className="col-md-12">
                    {this.props.children || <Home />}
                </div>
            </div>
        );
    }
};