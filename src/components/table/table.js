import React from 'react';
import * as data from './layout';
import JsonTable from 'react-json-table';


export class Table extends React.Component {
    constructor(props) {
        super(props);
        console.log(data);

        //this.state = {count: props.initialCount};
        this.constructRegions = this.constructRegions.bind(this);
    }

    constructRegions(regions) {
        var tables = [];
        var numT = 0;
        for (var key in regions) {
            if (regions.hasOwnProperty(key)) {
                
                let region = regions[key];
                var rows = [];
                for (var i = 0; i < region.length; ++i) {
                    rows.push(<tr key={i}><td>{region[i]}</td></tr>);
                    
                    
                } 
                tables.push(
                    <table key={numT}>
                        <thead>
                            <th>
                                {key}
                            </th>
                        </thead>
                        <tbody>
                          {rows}
                        </tbody>
                    </table>
                    );
                    ++numT;
            }
        }
        return tables;
    }

    render() {
        console.log(data.regions);
        var tables = [
            { 
                category: "Trunk",
            },
            {
                category: "Pelvis"
            }
            
            ]
        return (
                <JsonTable rows={ tables } />            
            );
    }
};