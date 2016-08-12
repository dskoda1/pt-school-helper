/* global localStorage */

import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Login } from './user/login';
import { Register } from './user/register';


export class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.checkLogin = this.checkLogin.bind(this);
    this.getUser = this.getUser.bind(this);
    this.logout = this.logout.bind(this);
  }
  
  checkLogin() {
    let user = localStorage.getItem('user');
    if (user === '') {
      return false;
    }
    else {
      return true;
    }
  }
  
  getUser() {
    return localStorage.getItem('user');
  }
  
  logout() {
    localStorage.setItem('user', '');
    hashHistory.push('/');
  }

  render() {
    let width = {
      width: '100%'
    }
    
    let userDiv = (this.checkLogin() ?
            (<ul className="nav navbar-nav navbar-right">
              <li><a href="#">Hello, {this.getUser()}</a></li>
              <li onClick={this.logout}><a href="#">Logout</a></li>
              </ul>) :
            (<ul className="nav navbar-nav navbar-right">
              <li><Link to="/Login">Login</Link></li>
              <li><Link to="/Register">Register</Link></li>
            </ul>));
    return (
      <div>
        <nav className="navbar navbar-default" style={width}>
          <div className="container-fluid">
                     
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">PT School</a>
            </div>
            
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/GaitDashboard">Gait Dashboard</Link></li>
              </ul>
              
                
                {userDiv}
              
            </div>
          </div>
        </nav>
            {this.props.children}
        </div>


    );

  }
}

//   <form className="navbar-form navbar-left">
//     <div className="form-group">
//       <input type="text" className="form-control" placeholder="Search" />
//     </div>
//     <button type="submit" className="btn btn-default">Submit</button>
//   </form>

// <li className="dropdown">
//   <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
//   <ul className="dropdown-menu">
//     <li><a href="#">Action</a></li>
//     <li><a href="#">Another action</a></li>
//     <li><a href="#">Something else here</a></li>
//     <li role="separator" className="divider"></li>
//     <li><a href="#">Separated link</a></li>
//     <li role="separator" className="divider"></li>
//     <li><a href="#">One more separated link</a></li>
//   </ul>
// </li>

// <ul className="nav navbar-nav navbar-right">
//                 <li><a href="#">Link</a></li>
//                 <li className="dropdown">
//                   <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
//                   <ul className="dropdown-menu">
//                     <li><a href="#">Action</a></li>
//                     <li><a href="#">Another action</a></li>
//                     <li><a href="#">Something else here</a></li>
//                     <li role="separator" className="divider"></li>
//                     <li><a href="#">Separated link</a></li>
//                   </ul>
//                 </li>
//               </ul>