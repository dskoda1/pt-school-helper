import React from 'react';
import { Table } from './table/table';

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>Gait Analysis</h1>
                <Table />
            </div>
        );
    }
};