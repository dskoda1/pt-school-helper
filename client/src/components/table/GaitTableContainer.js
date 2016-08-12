import React from 'react';

import { GaitTable } from './GaitTable';
import { hashHistory } from 'react-router'; 


export class GaitTableContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            patientName: ''
        };
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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createNewGaitRecord = this.createNewGaitRecord.bind(this);
        this.generateCreateForm = this.generateCreateForm.bind(this);
        this.generateViewTable = this.generateViewTable.bind(this);
        this.state.center = {
            textAlign: 'center'
        };
    }
    
    handleInputChange(name, e) {
        this.setState(Object.assign({},
            this.state, {
                [name]: e.target.value
            }
        ));
    }
    
    createNewGaitRecord(e) {
        e.preventDefault();
        let dateRecord = new Date().toISOString().slice(0, 19).replace('T', ' ');
        let patient = this.state.patientName;
        hashHistory.push({
            pathname: `/GaitTable/${patient}/edit`,
            query: this.tableProps});
        
    }
    
    generateCreateForm() {
        let patientName = this.state.patientName;
        let center = {
            textAlign: 'center'
        };
        return (
            <div>
                <span style={this.state.center}>
                    <h2>
                        Create
                    </h2>
                </span>
                <form className="">
                    <div className="form-group">
                        <label>Patient Name</label>
                        <input  type="text"
                                className="form-control" 
                                name="patientName" 
                                placeholder=""
                                onChange={this.handleInputChange.bind(this, 'patientName')}
                                value={patientName}/>
                    </div>
                    <button type="submit" 
                            className="btn btn-default"
                            onClick={this.createNewGaitRecord} >
                                Start new record
                    </button>
                </form>

            </div>
            );
        
    }
    generateViewTable() {
        let tableStyle = {
            width: "100%",
        };
        let classes = "table table-bordered table-hover table-responsive";

        return (
            <div>
                <span style={this.state.center}>
                    <h2>
                        View
                    </h2>
                </span>
                <table style={tableStyle} className={classes}>
                    <tbody>
                        <tr>
                            <th> Patient
                            </th>
                            <th> Date
                            </th>
                        </tr>
                    </tbody>
                </table>
            
            </div>
            )
        
    }
    
    render() {
        
        return (
        <div className="row">
            <span style={this.state.center}>

            <h1> Gait Table Dashboard </h1>
            </span>

            <div className="col-sm-4">
                {this.generateCreateForm()}
            </div>
            <div className="col-sm-8">
                {this.generateViewTable()}
            </div>
        </div>
        
        );
    }
    
    
    
}

//<GaitTable {...this.tableProps} />