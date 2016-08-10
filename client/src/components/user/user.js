/* global fetch */

import React from 'react';
import bcrypt from 'react-native-bcrypt';


export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.registerClick = this.registerClick.bind(this);
    }

    handleInputChange(name, e) {
        this.setState(Object.assign({},
            this.state, {
                [name]: e.target.value
            }
        ));
    }

    registerClick(e) {
        e.preventDefault();
        
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(this.state.password, salt);
        
       fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: hash
            })
        })
            .then((res) => {
                if (res.ok) {
                    
                }
                else {
                    
                }
            })

    }

    render() {
        console.log(this.state);
        let username = this.state.username;
        let password = this.state.password;
        return (
            <form className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
                <div className="form-group">
                <label>Username</label>
                <input  type="username" 
                        className="form-control" 
                        name="username" 
                        placeholder="Username" 
                        onChange={this.handleInputChange.bind(this, 'username')}
                        value={username}/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input  type="password" 
                        className="form-control" 
                        name="password" 
                        placeholder="Password"
                        onChange={this.handleInputChange.bind(this, 'password')}
                        value={password}/>
              </div>
              <button   type="submit" 
                        className="btn btn-default"
                        onClick={this.registerClick} >
                            Submit
                        </button>
            </form>

        );

    }
}