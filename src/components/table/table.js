import React from 'react';
import * as data from './layout';


export class Table extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        //this.state = {count: props.initialCount};
        //this.constructRegions = this.constructRegions.bind(this);
    }



    render() {

        var tableStyle = {
            width: "80%",
        }
        var rows = [];
        this.props.categories.forEach((ele, i, arr) => {
            console.log(ele);
            
            

        })

        return (
            <div>

                <div className="row">
                    <div className="col-xs-2">
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className="col-xs-2">
                        <h3>WA</h3>
                    </div>
                    <div className="col-xs-2">
                        <h3>SIS</h3>
                    </div>
                    <div className="col-xs-4">
                        <h3>SLA</h3>
                    </div>
                </div>
                <table style={tableStyle} className="table table-striped table-bordered table-hover">
                    <tbody>
                        <tr><th className="col-md-2">Category</th>
                            <th className="col-md-1">IC</th>
                            <th className="col-md-1">LR</th>
                            <th className="col-md-1">MSt</th>
                            <th className="col-md-1">TSt</th>
                            <th className="col-md-1">PSw</th>
                            <th className="col-md-1">ISw</th>
                            <th className="col-md-1">MSw</th>
                            <th className="col-md-1">TSw</th>
                            
                        </tr>
    
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
