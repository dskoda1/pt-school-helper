import React from 'react';

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: ""
        }
        
        this.changeUserName = this.changeUserName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.registerClick = this.registerClick.bind(this);
    }
    
    changeUserName (e) {
        this.setState(Object.assign(
            {},
            this.state,
            {userName: e.target.value}
            ));
    }
    
    changeEmail (e) {
        this.setState(Object.assign(
            {},
            this.state,
            {email: e.target.value}
            ));
    }
    
    changePassword (e) {
        this.setState(Object.assign(
            {},
            this.state,
            {password: e.target.value}
            ));
    }
    
    registerClick(e) {
        
        
    }
    
    render() {
        console.log(this.state);
        
        let userName = this.state.userName;
        let email = this.state.email;
        let password = this.state.password;
        return (
            <form className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
                <div className="form-group">
                <label>Username</label>
                <input  type="username" 
                        className="form-control" 
                        id="username" 
                        placeholder="Username" 
                        onChange={this.changeUserName}
                        value={userName}/>
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input  type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder="Email" 
                        onChange={this.changeEmail}
                        value={email}/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input  type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password"
                        onChange={this.changePassword}
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