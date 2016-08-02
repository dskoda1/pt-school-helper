import React from 'react';

import { GaitTable } from './GaitTable';

export class GaitTableContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.tableProps = {
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
    }
    
    render() {
        
        return (
        <div>
        <GaitTable {...this.tableProps} />
        </div>
        );
    }
    
    
    
}