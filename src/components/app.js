import React from 'react';
import { Table } from './table/table';

export class App extends React.Component {
    render() {
        
        var tableProps = {
            title: "Trunk",
            categories: [
                {
                    name: "Lean",
                    boxes: [0, 2, 2, 2, 1, 1, 1, 1]
                },
                {
                    name: "Lateral Lean",
                    boxes: [0, 2, 2, 2, 2, 2, 2, 2]
                },
                {
                    name: "Rotates",
                    boxes: [0, 1, 1, 1, 1, 1, 1, 1]
                }]
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