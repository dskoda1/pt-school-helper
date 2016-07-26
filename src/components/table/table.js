import React from 'react';
import * as data from './layout';
import { Checkbox } from '../checkbox/checkbox';


export class Table extends React.Component {
    constructor(props) {
        super(props);

        this.subPhases = [ "IC", "LR", "MSt", "TSt", "PSw", "ISw", "MSw", "TSw"];
        this.phases = ["WA", "SIS", "SLA"];
        
        this.generateTitleRow = this.generateTitleRow.bind(this);
        this.generateSubPhaseRow = this.generateSubPhaseRow.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        //this.state = {count: props.initialCount};
        //this.constructRegions = this.constructRegions.bind(this);
    }
    
    // Create the title row consisting of props.title and the 3
    // Phases
    generateTitleRow() {
        // Initialize some styles needed 
        var noLeft = {
            borderLeft: "0px"
        };
        var noRight = {
            borderRight: "0px"
        };
        var noSides = Object.assign({}, noLeft, noRight);
        return (
            <tr className="danger">
                <td className="col-sm-2">
                    <h2>{this.props.title}</h2>
                </td>
                <td className="col-sm-1" style={noRight}>
                    <h3>{this.phases[0]}</h3>
                </td>
                <td className="col-sm-1" style={noLeft}>
                </td>
                <td className="col-sm-1" style={noRight}>
                    <h3>{this.phases[1]}</h3>
                </td>
                <td className="col-sm-1" style={noLeft}>
                </td>
                <td className="col-sm-1" style={noRight}>
                    <h3>{this.phases[2]}</h3>
                </td>
                <td className="col-sm-1" style={noSides}>
                </td>
                <td className="col-sm-1" style={noSides}>
                </td>
                <td className="col-sm-1" style={noLeft}>
                </td>
            </tr>
            );
    }
    
    handleCheckboxClick(category, phase) {
        console.log(`Category: ${category}, Phase: ${phase}`);
        
    }
    
    // Create the header row consisting of the subPhases 
    // defined in the constructor
    generateSubPhaseRow() {
        var subPhases = this.subPhases.map((ele, i, arr) => {
            return (
                    <th className="col-sm-1" key={i}>{ele}</th>
                );            
        });
        
        return (
            <tr className="info">
                <th className="col-sm-2">Category</th>
                {subPhases}            
            </tr>
        );
    }

    render() {

        var tableStyle = {
            width: "100%",
        };
        var gray = {
            backgroundColor: "gray"
        }
        var black = {
            backgroundColor: "black"
        }
        
        
        var rows = this.props.categories.map((cat, i, arr) => {
            //console.log(cat);
            
            var cells = cat.boxes.map((ele, i, arr) => {
                var cb = (
                    <Checkbox
                        category={cat.name}
                        phase={this.phases[ele]}
                        onChange={this.handleCheckboxClick.bind(this)}
                    />
                    );
                if (ele == 0) {
                    return (
                    <td 
                        className="col-sm-1" 
                        key={i}
                        style={black} >
                    </td>
                    );
                }
                else if (ele == 1) {
                    return (
                    <td 
                        className="col-sm-1" 
                        key={i} 
                        style={gray} >
                        {cb}
                    </td>
                    );
                }
                else if (ele == 2) {
                    return (
                    <td 
                        className="col-sm-1" 
                        key={i} >
                        {cb}
                    </td>
                    );
                }
            });
    
            return (
                    <tr key={i}>
                        <td className="col-sm-2 success">{cat.name}</td>
                        {cells}        
                    </tr>
                );
        })

        return (
            <div>
                <table style={tableStyle} className="table table-bordered table-hover table-responsive">
                    <tbody>
                        {this.generateTitleRow()}
                        {this.generateSubPhaseRow()}
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
};

Table.propTypes = {
    title: React.PropTypes.string.isRequired,
    categories: React.PropTypes.array.isRequired,
    

}


// constructRegions(regions) {
//         var tables = [];
//         var numT = 0;
//         for (var key in regions) {
//             if (regions.hasOwnProperty(key)) {

//                 let region = regions[key];
//                 var rows = [];
//                 for (var i = 0; i < region.length; ++i) {
//                     rows.push(<tr key={i}><td>{region[i]}</td></tr>);


//                 } 
//                 tables.push(
//                     <table key={numT}>
//                         <thead>
//                             <th>
//                                 {key}
//                             </th>
//                         </thead>
//                         <tbody>
//                           {rows}
//                         </tbody>
//                     </table>
//                     );
//                     ++numT;
//             }
//         }
//         return tables;
//     }
