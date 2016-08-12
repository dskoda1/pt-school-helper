import React from 'react';


export class GaitTable extends React.Component {
    
    constructor(props) {
        super(props);
        
        console.log(JSON.stringify(props));
        
        // Bind the class methods to this instance
        this.parseProps = this.parseProps.bind(this);
        this.parseProps(props);
        this.initialize = this.initialize.bind(this);
        this.generateTitleRow = this.generateTitleRow.bind(this);
        this.generateSubPhaseRow = this.generateSubPhaseRow.bind(this);
        this.generateRows = this.generateRows.bind(this);
        this.setClicked = this.setClicked.bind(this);
        //this.persistState = this.persistState.bind(this);
        
        
        
        // Create the initial state
        this.state = this.initialize();
    }
    
    parseProps(props) {
        console.log(props.location.query);
        this.properties = JSON.parse(props.location.query);
        
    }
    
    // Create the array of checked state 
    initialize() {
        // Two arrays that are the same for all GaitTables
        this.subPhases = ["IC", "LR", "MSt", "TSt", "PSw", "ISw", "MSw", "TSw"];
        this.phases = ["WA", "SIS", "SLA"];
        
        // width of a table cell
        this.tdClass = "col-sm-1";
        
        return {
            checked: this.properties.categories.map((ele, i, arr) => {
                return this.subPhases.map(() => {
                    return 0;
                });
            })
        };
    }

    // Create the title row consisting of props.title and the 3
    // Phases
    generateTitleRow() {
        // Initialize some styles needed 
        let noLeft = {
            borderLeft: "0px"
        };
        let noRight = {
            borderRight: "0px"
        };
        let noSides = Object.assign({}, noLeft, noRight);
        
        // helper method to return td with style 's'
        let emptyTd = (s) => {
            return (
                <td className={this.tdClass} style={s}></td>
                );
        };
        
        // Create and return the Title tr element
        return (
            <tr className="danger">
                <td className="col-sm-2">
                    <h2>{this.properties.title}</h2>
                </td>
                <td className={this.tdClass} style={noRight}>
                    <h3>{this.phases[0]}</h3>
                </td>
                {emptyTd(noLeft)}
                <td className={this.tdClass} style={noRight}>
                    <h3>{this.phases[1]}</h3>
                </td>
                {emptyTd(noLeft)}
                <td className={this.tdClass} style={noRight}>
                    <h3>{this.phases[2]}</h3>
                </td>
                {emptyTd(noSides)}
                {emptyTd(noSides)}
                {emptyTd(noLeft)}
            </tr>
        );
    }

    // Create the header row consisting of the subPhases 
    // defined in the constructor
    generateSubPhaseRow() {
        // Create the SubPhase th elements
        let subPhases = this.subPhases.map((ele, i, arr) => {
            return (
                <th className={this.tdClass} key={i}>{ele}</th>
            );
        });

        // Return the SubPhase tr element
        return (
            <tr className="info">
                <th className="col-sm-2">Category</th>
                {subPhases}            
            </tr>
        );
    }
    
    // Generate the actual content rows of the table
    generateRows() {
        // Define some styles needed 
        let white={
            textAlign: "center",
        }
        let gray = {
            backgroundColor: "#d1d1e0",
            textAlign: "center",
        }
        let black = {
            backgroundColor: "black",
        }
        
        // The check mark glyphicon
        let checkMark = (<i className="glyphicon glyphicon-ok"></i>);


        // Loop through the categories
        return this.properties.categories.map((cat, i, arr) => {
            // Loop through the box levels for this category
            let cells = cat.boxes.map((ele, j, arr) => {
                // Initialize the default function and the one that can be clicked
                let fn = () => {}
                const clicked = () => { this.setClicked(i,j)};
                let selectedStyle;
                
                // Select the correct style and function
                switch(ele){
                    case 0:
                        selectedStyle = black;
                        break;
                    case 1:
                        selectedStyle = gray;
                        fn = clicked;
                        break;
                    case 2:
                        selectedStyle = white;
                        fn = clicked;
                        break;
                    default:
                        break;
                }
                
                // Create and return the td cell element 
                return (
                    <td
                        className={this.tdClass}
                        key={j}
                        style={selectedStyle}
                        onClick={fn}>
                        {this.state.checked[i][j] ? checkMark : ""}
                        </td>
                );
            });
            
            // Create and return the tr element with all the cells
            return (
                <tr key={i}>
                        <td className="col-sm-2 success">{cat.name}</td>
                        {cells}        
                    </tr>
            );
        })

    }
    
    // Modify the state of the checked boxes at 'i', 'j'
    setClicked(i, j) {
        let clicked = this.state.checked;
        clicked[i][j] = clicked[i][j] ? 0 : 1;
        console.log(`category: ${this.properties.categories[i].name} ` + 
                    `subPhase: ${this.subPhases[j]}`);
        this.setState({
            checked: clicked
        });
    }
    
    

    render() {
        // Define the styles and classname for the table
        let tableStyle = {
            width: "100%",
        };
        let classes = "table table-bordered table-hover table-responsive";

        // Create and return the table element itself
        return (
            <div>
                <table style={tableStyle} className={classes}>
                    <tbody>
                        {this.generateTitleRow()}
                        {this.generateSubPhaseRow()}
                        {this.generateRows()}
                    </tbody>
                </table>
                <button >Save</button>
            </div>
        );
    }
};


// GaitTable.propTypes = {
//     title: React.PropTypes.string.isRequired,
//     categories: React.PropTypes.array.isRequired,
// }

