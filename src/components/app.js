import React from 'react';
import { Table } from './table/table';

export class App extends React.Component {
    render() {
        
        var tableProps = {
            title: "Trunk",
            categories: [
                "Lean",
                "Lateral Lean",
                "Rotates"
                ]
        }
        
        return (
            <div className="app">
                <div className="col-md-12">
                    <h1>Gait Analysis</h1>
                    <Table {...tableProps} />
                </div>
            </div>
        );
    }
};