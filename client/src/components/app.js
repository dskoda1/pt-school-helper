import React from 'react';
import { GaitTable } from './table/GaitTable';
import { Navbar } from './navbar';

export class App extends React.Component {
    render() {
        
        
        
        return (
            <div className="app">
                <div className="col-md-12">
                    <Navbar />
                    {this.props.children}
                </div>
            </div>
        );
    }
};