import React from 'react';


export class Checkbox extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            checked: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            checked: event.clicked
        })
        console.log(this.state.checked);
        
    }
    
    render() {
        var color = {};
        if (this.props.level == 0) {
            color.backgroundColor = "black";
        }
        else if (this.props.level == 1) {
            color.backgroundColor = "gray";
        }
        else if (this.props.level == 2) {
            color.backgroundColor = "white";
        } 
        
        
        return (
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onClick={this.handleChange}
                />
            );
        
    }
    
};

Checkbox.propTypes = {
    category: React.PropTypes.string.isRequired,
    phase: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
}